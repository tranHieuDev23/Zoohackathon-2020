import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { MapPickerValue } from 'src/app/components/map-picker/map-picker.component';
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
    this.formGroup.valueChanges.subscribe((values) => {
      this.onChanges(values);
    });
  }

  ngOnInit(): void {
  }

  onChanges(values: any): void {
    this.locationString = this.getLocationString(values.location);
  }

  onFilesChange(filesChange: NzUploadChangeParam): void {
    if (filesChange.file.status !== 'done') {
      return;
    }
    this.formGroup.patchValue({
      images: this.uploadedFiles.map((item) => {
        return item.originFileObj
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

  private getLocationString(value: MapPickerValue): string {
    if (!value) {
      return null;
    }
    if (value.feature && value.feature.properties.name) {
      return value.feature.properties.name;
    }
    return `${value.coord.lat},${value.coord.lng}`;
  }
}
