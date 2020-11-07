import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportPageComponent } from './report.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';


@NgModule({
  declarations: [ReportPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzTypographyModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzGridModule,
    NzUploadModule,
    NzStepsModule
  ],
  providers: [

  ]
})
export class ReportPageModule { }
