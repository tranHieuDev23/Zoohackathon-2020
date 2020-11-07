import { TestBed } from '@angular/core/testing';

import { NgGeocodeService } from './geocode.service';

describe('NgGeocodeService', () => {
  let service: NgGeocodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGeocodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
