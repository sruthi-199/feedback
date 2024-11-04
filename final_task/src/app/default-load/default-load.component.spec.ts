import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLoadComponent } from './default-load.component';

describe('DefaultLoadComponent', () => {
  let component: DefaultLoadComponent;
  let fixture: ComponentFixture<DefaultLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
