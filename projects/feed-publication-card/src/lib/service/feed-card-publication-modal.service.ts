import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IFeedPublicationCard } from '../../interface';
import { FeedPublicationCardComponent } from '../feed-publication-card.component';

@Injectable({
  providedIn: 'root',
})
export class FeedCardPublicationModalService {
  constructor(private dialog: MatDialog) {}

  openModalPublication(data: IFeedPublicationCard) {
    return this.dialog.open(FeedPublicationCardComponent, {
      panelClass: ['col-3', 'p-0'],
      data,
    });
  }
}
