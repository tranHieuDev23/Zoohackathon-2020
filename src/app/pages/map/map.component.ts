import { Component, OnInit } from '@angular/core';
import { MapiResponse } from '@mapbox/mapbox-sdk/lib/classes/mapi-response';
import { LngLatBoundsLike, LngLatLike, Map } from 'mapbox-gl';
import { NgGeocodeService } from 'src/app/services/geocode.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapPageComponent implements OnInit {
  public searchQuery: string = '';

  private map: Map;

  constructor(
    private geocode: NgGeocodeService
  ) { }

  async ngOnInit() {
    const currentLocation = await this.geocode.getCurrentLocation();
    this.map = new Map({
      container: 'map',
      style: environment.mapbox.style,
      zoom: environment.mapbox.initialZoomLevel,
      accessToken: environment.mapbox.accessToken
    });
    this.moveTo(currentLocation);
  }

  async search() {
    const trimmedQuery = this.searchQuery.trim();
    if (trimmedQuery.length === 0) {
      return;
    }
    const mapCenter = this.map.getCenter();
    const result: MapiResponse = await this.geocode.searchLocation(trimmedQuery, mapCenter);
    const locations: any[] = result.body.features;
    if (locations.length === 0) {
      return;
    }
    const match = locations[0];
    console.log(match);
    if (match.bbox) {
      this.moveToFit(match.bbox);
    } else {
      this.moveTo(match.center);
    }
  }

  async toCurrentLocation() {
    const currentLocation = await this.geocode.getCurrentLocation();
    this.moveTo(currentLocation);
    this.map.setZoom(environment.mapbox.initialZoomLevel);
  }

  private moveToFit(bbox: LngLatBoundsLike) {
    this.map.fitBounds(bbox, { animate: false });
  }

  private moveTo(center: LngLatLike) {
    this.map.flyTo({ center, animate: false });
  }
}
