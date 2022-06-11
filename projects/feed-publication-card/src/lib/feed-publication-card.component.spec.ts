import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { FeedPublicationCardComponent } from './feed-publication-card.component';
import { BackgroundPostModel } from './models';

describe('FeedPublicationCardComponent', () => {
  let component: FeedPublicationCardComponent;
  let fixture: ComponentFixture<FeedPublicationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            onChangeImgPreview: () => {
              return null;
            },
            onChangePosterPreview: () => {
              return null;
            },
            onChangeVideoPreview: () => {
              return null;
            },
            getImgPreviewProgress: () => {
              return of(0);
            },
            getVideoPreviewProgress: () => {
              return of(0);
            },
            getPosterPreviewProgress: () => {
              return of(0);
            },
            backgroundSelected: 0,
            linearBackgroundList: [
              new BackgroundPostModel(['#11998e', '#38ef7d'], {
                start: [0, 0],
                end: [1, 1],
              }),
              new BackgroundPostModel(['#ffb347', '#ffcc33'], {
                start: [0, 0],
                end: [1, 1],
              }),
              new BackgroundPostModel(['#B2FEFA', '#0ED2F7'], {
                start: [1, 1],
                end: [0, 0],
              }),
              new BackgroundPostModel(['#8E2DE2', '#4A00E0'], {
                start: [1, 1],
                end: [0, 0],
              }),
              new BackgroundPostModel(['#ee0979', '#ff6a00'], {
                start: [0, 0],
                end: [0, 1],
              }),
            ],
          },
        },
        { provide: MatDialogRef, useValue: {} },
      ],
      declarations: [FeedPublicationCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPublicationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
