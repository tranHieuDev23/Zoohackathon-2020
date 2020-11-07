import { Injectable } from '@angular/core';
import { Report } from 'src/models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reports: Report[] = [];

  constructor() { }

  public async uploadReport(newReport: Report): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.reports.push(newReport);
      resolve();
    });
  }

  public async getAllReport(): Promise<Report[]> {
    return new Promise<Report[]>((resolve, reject) => {
      resolve(this.reports);
    });
  }
}
