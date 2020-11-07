import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportPageComponent implements OnInit {
  public formGroup: FormGroup;
  public uploadedFiles: NzUploadFile[] = [];

  constructor(
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      category: [null, [Validators.required]],
      location: [null, [Validators.required]],
      description: [null, [Validators.required]],
      images: [[], [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }
}
