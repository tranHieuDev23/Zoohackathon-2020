import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPickerComponent } from './map-picker.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [MapPickerComponent],
  imports: [
    CommonModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox.accessToken
    })
  ],
  exports: [
    MapPickerComponent
  ]
})
export class MapPickerModule { }
