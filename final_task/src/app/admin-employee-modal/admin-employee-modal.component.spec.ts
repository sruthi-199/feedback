import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeModalComponent } from './admin-employee-modal.component';

describe('AdminEmployeeModalComponent', () => {
  let component: AdminEmployeeModalComponent;
  let fixture: ComponentFixture<AdminEmployeeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEmployeeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
