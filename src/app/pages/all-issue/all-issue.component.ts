import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/services/issue.service';
import { Issue } from 'src/models/issue';

@Component({
  selector: 'app-all-issue',
  templateUrl: './all-issue.component.html',
  styleUrls: ['./all-issue.component.scss']
})
export class AllIssuePageComponent implements OnInit {
  public issues: Issue[] = [];

  constructor(
    private issueService: IssueService
  ) { }

  async ngOnInit() {
    this.issues = await this.issueService.getAllIssue();
  }

  onChangeTab(id: number) {

  }
}
