import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirtanDialogComponent } from './kirtan-dialog.component';

describe('KirtanDialogComponent', () => {
  let component: KirtanDialogComponent;
  let fixture: ComponentFixture<KirtanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KirtanDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KirtanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
