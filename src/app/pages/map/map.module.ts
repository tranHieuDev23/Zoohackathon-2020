import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './map.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MapPageComponent],
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    FormsModule
  ]
})
export class MapPageModule { }
