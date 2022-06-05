import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeedPublicationCardComponent } from '../feed-publication-card.component';
import { IFeedPublicationPayload } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class FeedCardPublicationModalService {
  constructor(private dialog: MatDialog) {}

  openModalPublication(data: IFeedPublicationPayload) {
    return this.dialog.open(FeedPublicationCardComponent, {
      panelClass: ['col-3', 'p-0'],
      data,
    });
  }
}
