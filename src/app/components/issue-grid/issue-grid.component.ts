import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from 'src/models/issue';
import { getIssueStatusColor, getIssueStatusString, IssueStatus } from 'src/models/issue-status';

@Component({
  selector: 'app-issue-grid',
  templateUrl: './issue-grid.component.html',
  styleUrls: ['./issue-grid.component.scss']
})
export class IssueGridComponent implements OnInit {
  @Input('issues') issues: Issue[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getIssueStatusColor(status: IssueStatus): string {
    return getIssueStatusColor(status);
  }

  getIssueStatusString(status: IssueStatus): string {
    return getIssueStatusString(status);
  }

  onClick(id: number): void {
    this.router.navigateByUrl(`/issue/${this.issues[id].id}`);
  }
}
