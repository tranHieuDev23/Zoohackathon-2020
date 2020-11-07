import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { MapPickerValue } from 'src/app/components/map-picker/map-picker.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportPageComponent implements OnInit {
  public formGroup: FormGroup;
  public locationString: string = null;
  public uploadedFiles: NzUploadFile[] = [];

  constructor(
    formBuilder: FormBuilder
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

  onSubmit(): void {
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
