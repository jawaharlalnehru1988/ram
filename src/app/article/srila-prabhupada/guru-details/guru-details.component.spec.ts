import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuruDetailsComponent } from './guru-details.component';

describe('GuruDetailsComponent', () => {
  let component: GuruDetailsComponent;
  let fixture: ComponentFixture<GuruDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuruDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuruDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
