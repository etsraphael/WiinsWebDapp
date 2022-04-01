import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FMusicVideoComponent } from './f-music-video.component';

describe('FMusicVideoComponent', () => {
  let component: FMusicVideoComponent;
  let fixture: ComponentFixture<FMusicVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FMusicVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FMusicVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
