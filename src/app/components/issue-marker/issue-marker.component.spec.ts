import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueMarkerComponent } from './issue-marker.component';

describe('IssueMarkerComponent', () => {
  let component: IssueMarkerComponent;
  let fixture: ComponentFixture<IssueMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
