import { TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { FeedPublicationService } from './feed-publication.service';

describe('FeedPublicationService', () => {
  let service: FeedPublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    });
    service = TestBed.inject(FeedPublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
