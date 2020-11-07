import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueGridComponent } from './issue-grid.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    IssueGridComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzTypographyModule,
    NzTagModule,
    NzIconModule
  ],
  exports: [
    IssueGridComponent
  ]
})
export class IssueGridModule { }
