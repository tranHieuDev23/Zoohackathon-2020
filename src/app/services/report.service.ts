import { Injectable } from '@angular/core';
import { LngLat } from 'mapbox-gl';
import { LOREM_IPSUM } from 'src/environments/constants';
import { Report } from 'src/models/report';
import { ReportType } from 'src/models/report-type';
import { MapPickerValue } from '../components/map-picker/map-picker.component';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reports: Report[] = [];
  private highlightReports: Report[] = [
    new Report(
      ReportType.DESTRUCTION,
      new MapPickerValue(new LngLat(105.808467, 20.9711203), null),
      LOREM_IPSUM,
      [
        "https://images.unsplash.com/photo-1579691370236-76f5cbd00ea6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1592028219310-0cb15923525a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1556903896-9621381094fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
      ]
    ),
    new Report(
      ReportType.DISEASE,
      new MapPickerValue(new LngLat(105.808467, 20.9711203), null),
      LOREM_IPSUM,
      [
        "https://images.unsplash.com/photo-1458727753752-794bda765d75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
        "https://images.unsplash.com/photo-1502227709945-6816c69c7154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
        "https://images.unsplash.com/photo-1500453517139-9eeacd1f6cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1517240986171-6b73f17b1c74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1998&q=80"
      ]
    )
  ];

  constructor() { }

  public async uploadReport(newReport: Report): Promise<void> {
    return new Promise<void>((resolve) => {
      this.reports.push(newReport);
      resolve();
    });
  }

  public async getAllReport(): Promise<Report[]> {
    return new Promise<Report[]>((resolve) => {
      resolve(this.reports);
    });
  }

  public async getHighlightReports(issueId: string): Promise<Report[]> {
    return new Promise<Report[]>((resolve) => {
      resolve(this.highlightReports);
    });
  }
}
