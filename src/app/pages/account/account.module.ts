import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [AccountPageComponent],
  imports: [
    CommonModule,
    NzTypographyModule,
    NzCardModule,
    NzGridModule
  ]
})
export class AccountPageModule { }
