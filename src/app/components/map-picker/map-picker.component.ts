import { Component, EventEmitter, forwardRef, OnInit, Output, ViewChild } from '@angular/core';
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
  ]
})
export class MapPickerComponent implements OnInit, ControlValueAccessor {
  @ViewChild(MapComponent) map: MapComponent;
  @Output('change') change: EventEmitter<MapPickerValue> = new EventEmitter<MapPickerValue>();

  public style: string = environment.mapbox.style;
  public zoom: number = environment.mapbox.initialZoomLevel;
  public center: LngLatLike = [0, 0];

  constructor(
    private geocode: NgGeocodeService
  ) { }

  async ngOnInit() {
    this.center = await this.geocode.getCurrentLocation();
    this.map.mapInstance.on('click', (event) => {
      this.onMapClick(event);
    });
  }

  private onMapClick(event: MapMouseEvent & EventData): void {
    console.log(event);
    const coord: LngLat = event.lngLat;
    const features = this.map.mapInstance.queryRenderedFeatures(event.point);
    const selected: MapboxGeoJSONFeature = features.length > 0 ? features[0] : null;
    const value: MapPickerValue = new MapPickerValue(coord, selected);
    this.writeValue(value);
    this.change.emit(value);
  }

  writeValue(value: MapPickerValue): void {
    if (!value) {
      return;
    }
    this.center = value.coord;
  }

  registerOnChange(fn: (value: MapPickerValue) => void): void {
    this.change.subscribe((value: MapPickerValue) => {
      fn(value);
    })
  }

  registerOnTouched(): void {
  }
}
