import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BackgroundPostModel } from '@wiins/common-models';
import {
  FeedPublicationCardComponent,
  IFeedPublicationCard,
} from './feed-publication-card.component';

@Injectable({
  providedIn: 'root',
})
export class FeedPublicationCardService {
  constructor(private dialog: MatDialog) {}

  generateBackground(payload: BackgroundPostModel): string {
    const deltaX = payload.orientations.end[0] - payload.orientations.start[0];
    const deltaY = payload.orientations.end[1] - payload.orientations.start[1];
    const deg = (Math.atan2(deltaY, deltaX) * 180.0) / Math.PI;
    return `linear-gradient(${deg}deg, ${payload.colors.join(', ')})`;
  }

  openModalPublication(
    data: IFeedPublicationCard
  ): MatDialogRef<FeedPublicationCardComponent> {
    return this.dialog.open(FeedPublicationCardComponent, {
      panelClass: ['col-3', 'p-0'],
      data,
    });
  }
}
