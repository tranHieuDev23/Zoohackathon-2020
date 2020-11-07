import { Injectable } from '@angular/core';
import { LngLat } from 'mapbox-gl';
import { Issue } from 'src/models/issue';
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
      null,
      []
    )
  ];

  constructor() { }

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
