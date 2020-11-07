import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPickerComponent } from './map-picker.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [MapPickerComponent],
  imports: [
    CommonModule,
    NzTypographyModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox.accessToken
    })
  ],
  exports: [
    MapPickerComponent
  ]
})
export class MapPickerModule { }
