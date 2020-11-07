import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from 'src/app/services/issue.service';
import { ReportService } from 'src/app/services/report.service';
import { Issue } from 'src/models/issue';
import { getIssueStatusColor, getIssueStatusString, IssueStatus } from 'src/models/issue-status';
import { Report } from 'src/models/report';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssuePageComponent implements OnInit {
  public issue: Issue = null;
  public reports: Report[] = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private issueService: IssueService,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async (param) => {
      const id: string = param['id'];
      if (!id) {
        this.router.navigateByUrl('/');
        return;
      }
      this.initialize(await this.issueService.getIssue(id));
    });
  }

  private async initialize(issue: Issue) {
    this.issue = issue;
    this.reports = await this.reportService.getHighlightReports(issue.id);
  }

  getIssueStatusColor(status: IssueStatus): string {
    return getIssueStatusColor(status);
  }

  getIssueStatusString(status: IssueStatus): string {
    return getIssueStatusString(status);
  }

  formatDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }
}
