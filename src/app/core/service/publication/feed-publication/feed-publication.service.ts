import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FeedPublicationCardComponent,
  FeedPublicationCardService,
} from '@wiins/feed-publication-card';
import { BackgroundPostModel } from '@wiins/common-models';
import { IFeedPublicationCard } from '@wiins/feed-publication-card';

@Injectable({
  providedIn: 'root',
})
export class FeedPublicationService {
  linearBgPost: BackgroundPostModel[] = [
    new BackgroundPostModel(['#8E2DE2', '#4A00E0'], {
      start: [1, 1],
      end: [0, 0],
    }),
    new BackgroundPostModel(['red', 'green'], {
      start: [0, 0],
      end: [1, 0],
    }),
    new BackgroundPostModel(['blue', 'pink'], {
      start: [1, 0],
      end: [0, 1],
    }),
  ];

  constructor(private feedPublicationCardService: FeedPublicationCardService) {}

  onCreatePublication(): MatDialogRef<FeedPublicationCardComponent> {
    const data: IFeedPublicationCard = {
      linearBackgroundList: this.linearBgPost,
    };

    return this.feedPublicationCardService.openModalPublication(data);
  }
}
