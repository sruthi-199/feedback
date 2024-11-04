import { TestBed } from '@angular/core/testing';

import { EmployeeReviewService } from './employee-review.service';

describe('EmployeeReviewService', () => {
  let service: EmployeeReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
