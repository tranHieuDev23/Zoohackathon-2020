import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { ReportService } from 'src/app/services/report.service';
import { Report } from 'src/models/report';
import { getAllReportType, getReportTypeName } from 'src/models/report-type';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportPageComponent implements OnInit {
  public formGroup: FormGroup;
  public typeOptions: any[] = getAllReportType().map(item => {
    return {
      label: getReportTypeName(item),
      value: item
    };
  });
  public locationString: string = null;
  public uploadedFiles: NzUploadFile[] = [];

  constructor(
    formBuilder: FormBuilder,
    private reportService: ReportService,
    private router: Router
  ) {
    this.formGroup = formBuilder.group({
      category: [null, [Validators.required]],
      location: [null, [Validators.required]],
      description: [null, [Validators.required]],
      images: [[], [Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
  }

  onFilesChange(): void {
    this.formGroup.patchValue({
      images: this.uploadedFiles.map((item) => {
        return item.thumbUrl;
      })
    });
  }

  async onSubmit() {
    Object.keys(this.formGroup.controls).forEach(field => {
      const control = this.formGroup.get(field);
      control.markAsTouched();
      control.updateValueAndValidity();
    });
    if (this.formGroup.valid) {
      await this.reportService.uploadReport(this.formGroup.getRawValue() as Report);
      this.router.navigateByUrl('/');
    }
  }
}
