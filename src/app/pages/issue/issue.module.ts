import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuePageComponent } from './issue.component';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [IssuePageComponent],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzTimelineModule,
    NzCommentModule,
    NzTypographyModule,
    NzTagModule,
    NzListModule,
    NzIconModule,
    NzGridModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox.accessToken
    })
  ]
})
export class IssuePageModule { }
