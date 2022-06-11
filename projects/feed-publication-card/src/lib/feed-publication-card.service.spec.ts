import { TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FeedPublicationCardService } from './feed-publication-card.service';

describe('FeedPublicationCardService', () => {
  let service: FeedPublicationCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    service = TestBed.inject(FeedPublicationCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
