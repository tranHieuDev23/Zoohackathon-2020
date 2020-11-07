import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsPageComponent } from './notifications.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [NotificationsPageComponent],
  imports: [
    CommonModule,
    NzTypographyModule,
    NzListModule,
    NzIconModule
  ]
})
export class NotificationsPageModule { }
