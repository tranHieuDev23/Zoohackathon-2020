import { Injectable } from '@angular/core';
import { LngLat } from 'mapbox-gl';
import { LOREM_IPSUM } from 'src/environments/constants';
import { Issue, TimelineEvent } from 'src/models/issue';
import { IssueStatus } from 'src/models/issue-status';
import { MapPickerValue } from '../components/map-picker/map-picker.component';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issues: Issue[] = [
    new Issue(
      '1',
      'The polution of Tô Lịch river',
      new Date(),
      'How a river in central Hanoi was killed',
      new MapPickerValue(new LngLat(106, 21), null),
      IssueStatus.RESOLVED,
      'https://images.unsplash.com/photo-1548170387-b77219d17807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
      [
        new TimelineEvent(
          'Local reported weird smell coming from the river',
          LOREM_IPSUM,
          IssueStatus.DISCOVERED,
          'https://images.unsplash.com/photo-1504412739380-5136daab7895?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          new Date(2020, 3, 23)
        ),
        new TimelineEvent(
          'The incident was verified and reported to the authority',
          LOREM_IPSUM,
          IssueStatus.REPORTED,
          'https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          new Date(2020, 3, 30)
        ),
        new TimelineEvent(
          'The Ministry of Natural Resources and Environment issued an investigation',
          LOREM_IPSUM,
          IssueStatus.INVESTIGATING,
          'https://images.unsplash.com/photo-1592314422840-4712aae94e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          new Date(2020, 4, 15)
        ),
        new TimelineEvent(
          'A new budget bill was allocated for the cleansing of the river',
          LOREM_IPSUM,
          IssueStatus.RESOLVED,
          'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          new Date(2020, 4, 29)
        )
      ]
    )
  ];

  constructor() { }

  public async getIssue(id: string): Promise<Issue> {
    return new Promise<Issue>((resolve, reject) => {
      const result = this.issues.find(item => item.id === id);
      if (result) {
        return resolve(result);
      }
      reject('Not found');
    });
  }

  public async getAllIssue(): Promise<Issue[]> {
    return new Promise<Issue[]>((resolve) => {
      resolve(this.issues);
    });
  }

  public async addIssue(newIssue: Issue): Promise<void> {
    return new Promise<void>((resolve) => {
      this.issues.push(newIssue);
      resolve();
    });
  }
}
