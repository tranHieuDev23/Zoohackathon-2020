import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueMarkerComponent } from './issue-marker.component';



@NgModule({
  declarations: [IssueMarkerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    IssueMarkerComponent
  ]
})
export class IssueMarkerModule { }
