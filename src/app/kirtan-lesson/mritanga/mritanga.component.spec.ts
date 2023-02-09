import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MritangaComponent } from './mritanga.component';

describe('MritangaComponent', () => {
  let component: MritangaComponent;
  let fixture: ComponentFixture<MritangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MritangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MritangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
