import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from 'src/models/issue';
import { getIssueStatusColor } from 'src/models/issue-status';

@Component({
  selector: 'app-issue-marker',
  templateUrl: './issue-marker.component.html',
  styleUrls: ['./issue-marker.component.scss']
})
export class IssueMarkerComponent implements OnInit {
  @Input('issue') issue: Issue;
  public color: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.color = getIssueStatusColor(this.issue.status);
  }

  onClick(): void {
    this.router.navigateByUrl(`/issue/${this.issue.id}`);
  }
}
