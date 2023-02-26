import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioKirtanComponent } from './audio-kirtan.component';

describe('AudioKirtanComponent', () => {
  let component: AudioKirtanComponent;
  let fixture: ComponentFixture<AudioKirtanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioKirtanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioKirtanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
