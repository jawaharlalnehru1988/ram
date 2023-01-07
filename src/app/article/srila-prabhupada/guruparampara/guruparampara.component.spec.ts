import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuruparamparaComponent } from './guruparampara.component';

describe('GuruparamparaComponent', () => {
  let component: GuruparamparaComponent;
  let fixture: ComponentFixture<GuruparamparaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuruparamparaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuruparamparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
