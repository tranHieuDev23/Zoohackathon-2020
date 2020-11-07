import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventData, LngLat, LngLatLike, Map, MapboxGeoJSONFeature, MapMouseEvent } from 'mapbox-gl';
import { NgGeocodeService } from 'src/app/services/geocode.service';
import { environment } from 'src/environments/environment';

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
  private map: Map
  @Output('change') change: EventEmitter<MapPickerValue> = new EventEmitter<MapPickerValue>();

  constructor(
    private geocode: NgGeocodeService
  ) { }

  async ngOnInit() {
    const currentLocation = await this.geocode.getCurrentLocation();
    this.map = new Map({
      container: 'map-picker',
      style: environment.mapbox.style,
      zoom: environment.mapbox.initialZoomLevel,
      accessToken: environment.mapbox.accessToken
    });
    this.moveTo(currentLocation);
    this.map.on('load', () => {
      this.map.on('click', this.onMapClick.bind(this));
    });
  }

  private moveTo(center: LngLatLike) {
    this.map.flyTo({ center, animate: false });
  }

  private onMapClick(event: MapMouseEvent & EventData): void {
    const coord: LngLat = event.lngLat;
    const features = this.map.queryRenderedFeatures(event.point);
    const selected: MapboxGeoJSONFeature = features.length > 0 ? features[0] : null;
    const value: MapPickerValue = new MapPickerValue(coord, selected);
    this.writeValue(value);
    this.change.emit(value);
  }

  writeValue(value: MapPickerValue): void {
    if (!value) {
      return;
    }
    this.moveTo(value.coord);
  }

  registerOnChange(fn: (value: MapPickerValue) => void): void {
    this.change.subscribe((value: MapPickerValue) => {
      fn(value);
    })
  }

  registerOnTouched(): void {
  }
}
