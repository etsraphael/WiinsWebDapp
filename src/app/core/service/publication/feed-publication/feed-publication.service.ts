import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FeedPublicationCardComponent } from '@wiins/feed-publication-card';

@Injectable({
  providedIn: 'root',
})
export class FeedPublicationService {
  constructor(private dialog: MatDialog) {}

  onCreatePublication(): MatDialogRef<FeedPublicationCardComponent> {
    return this.dialog.open(FeedPublicationCardComponent, {
      panelClass: ['col-3', 'p-0'],
    });
  }
}
