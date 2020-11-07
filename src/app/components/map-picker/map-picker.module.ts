import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPickerComponent } from './map-picker.component';



@NgModule({
  declarations: [MapPickerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MapPickerComponent
  ]
})
export class MapPickerModule { }
