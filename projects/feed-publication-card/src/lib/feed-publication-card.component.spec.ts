import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { FeedPublicationCardComponent } from './feed-publication-card.component';

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
