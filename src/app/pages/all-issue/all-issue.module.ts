import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllIssuePageComponent } from './all-issue.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { IssueGridModule } from 'src/app/components/issue-grid/issue-grid.module';


@NgModule({
  declarations: [AllIssuePageComponent],
  imports: [
    CommonModule,
    NzTypographyModule,
    NzTabsModule,
    IssueGridModule
  ]
})
export class AllIssuePageModule { }
