import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIssuePageComponent } from './all-issue.component';

describe('AllIssuePageComponent', () => {
  let component: AllIssuePageComponent;
  let fixture: ComponentFixture<AllIssuePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllIssuePageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIssuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
