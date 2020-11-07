import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventData, LngLat, LngLatLike, MapboxGeoJSONFeature, MapMouseEvent } from 'mapbox-gl';
import { NgGeocodeService } from 'src/app/services/geocode.service';
import { environment } from 'src/environments/environment';
import { MapComponent } from 'ngx-mapbox-gl';

export class MapPickerValue {
  constructor(
    public readonly coord: LngLat,
    public readonly feature: MapboxGeoJSONFeature
  ) { }
}

@Component({
  selector: 'app-map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MapPickerComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPickerComponent implements OnInit, ControlValueAccessor {
  @Input('value') _value: MapPickerValue;
  @ViewChild(MapComponent) map: MapComponent;

  public style: string = environment.mapbox.style;
  public zoom: number = 13;
  public center: LngLatLike = [0, 0];
  public locationString: string = null;

  public onChange: any = () => { };
  public onTouched: any = () => { };

  public get value(): MapPickerValue {
    return this._value;
  }

  public set value(v: MapPickerValue) {
    this._value = v;
    this.onChange(v);
    this.onTouched();
    this.locationString = this.getLocationString(v);
    this.changeDetector.detectChanges();
  }

  constructor(
    private geocode: NgGeocodeService,
    private changeDetector: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    this.center = await this.geocode.getCurrentLocation();
    this.map.mapInstance.on('click', (event) => {
      this.onMapClick(event);
    });
    this.changeDetector.detectChanges();
  }

  private onMapClick(event: MapMouseEvent & EventData): void {
    console.log(event);
    const coord: LngLat = event.lngLat;
    const features = this.map.mapInstance.queryRenderedFeatures(event.point);
    const selected: MapboxGeoJSONFeature = features.length > 0 ? features[0] : null;
    this.writeValue(new MapPickerValue(coord, selected))
  }

  writeValue(v: MapPickerValue): void {
    if (!v) {
      return;
    }
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private getLocationString(value: MapPickerValue): string {
    if (!value) {
      return null;
    }
    if (value.feature && value.feature.properties.name) {
      return value.feature.properties.name;
    }
    return `${value.coord.lat},${value.coord.lng}`;
  }
}
