import { TestBed } from '@angular/core/testing';
import { FeedCardPublicationModalService } from './feed-card-publication-modal.service';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

describe('FeedCardPublicationModalService', () => {
  let service: FeedCardPublicationModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    service = TestBed.inject(FeedCardPublicationModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
