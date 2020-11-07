import { Injectable } from '@angular/core';
import { MapiResponse } from '@mapbox/mapbox-sdk/lib/classes/mapi-response';
import Geocoding from '@mapbox/mapbox-sdk/services/geocoding'
import { GeocodeService } from '@mapbox/mapbox-sdk/services/geocoding'
import { LngLat, LngLatLike } from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NgGeocodeService {
  private geocodeClient: GeocodeService;

  constructor() {
    this.geocodeClient = Geocoding({ accessToken: environment.mapbox.accessToken });
  }

  public async getCurrentLocation(): Promise<LngLat> {
    return new Promise<LngLat>((resolve, reject) => {
      if (!navigator) {
        return reject('Can\'t get navigator object!');
      }
      navigator.geolocation.getCurrentPosition((result) => {
        resolve(LngLat.convert([result.coords.longitude, result.coords.latitude]));
      }, (reason) => {
        reject(reason);
      }, {
        enableHighAccuracy: true
      });
    });
  }

  public async searchLocation(query: string, proximity: LngLatLike): Promise<MapiResponse> {
    return this.geocodeClient.forwardGeocode({
      mode: "mapbox.places",
      query,
      proximity: proximity['lng'] ? [proximity['lng'], proximity['lat']] : [proximity[0], proximity[1]]
    }).send();
  }

  public normalizeValue(value: number): number {
    value += 90;
    value %= 180;
    if (value < 0) {
      value += 180;
    }
    value -= 90;
    return value;
  }
}
