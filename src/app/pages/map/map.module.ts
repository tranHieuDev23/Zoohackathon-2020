import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './map.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { IssueMarkerModule } from 'src/app/components/issue-marker/issue-marker.module';

@NgModule({
  declarations: [MapPageComponent],
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    FormsModule,
    IssueMarkerModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox.accessToken
    })
  ]
})
export class MapPageModule { }
