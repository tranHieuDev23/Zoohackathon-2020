import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuePageComponent } from './issue.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [IssuePageComponent],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzCardModule,
    NzTimelineModule,
    NzCommentModule,
    NzTypographyModule,
    NzTagModule,
    NzListModule,
    NzIconModule,
    NzGridModule
  ]
})
export class IssuePageModule { }
