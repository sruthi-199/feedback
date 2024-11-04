import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReviewComponent } from './employee-review.component';

describe('EmployeeReviewComponent', () => {
  let component: EmployeeReviewComponent;
  let fixture: ComponentFixture<EmployeeReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
