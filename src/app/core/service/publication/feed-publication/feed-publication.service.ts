import { Injectable } from '@angular/core';
import {
  BackgroundPostModel,
  FeedPublicationCardService,
  IFeedPublicationPayload,
} from '@wiins/feed-publication-card';
import {
  ISendFileToStorageWithProgress,
  StorageService,
} from '../../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class FeedPublicationService {
  // data
  linearBgPost: BackgroundPostModel[] = [
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
  ];

  constructor(
    private feedPublicationCardService: FeedPublicationCardService,
    private storageService: StorageService
  ) {}

  onCreatePublication(): void {
    this.onUploadEvent();

    const payload: IFeedPublicationPayload = {
      linearBackgroundList: this.linearBgPost,
      backgroundSelected: 0,
    };

    return this.feedPublicationCardService.openModalPublication(payload);
  }

  onUploadEvent(): void {
    this.feedPublicationCardService
      .getfileValue('image')
      .subscribe((data: File[]) => {
        const payload: ISendFileToStorageWithProgress = {
          files: data,
          progress: (event: number) =>
            this.feedPublicationCardService.setProgressFileValue(
              'image',
              event
            ),
        };
        this.storageService.sendFileToStorageWithProgress(payload);
      });

    this.feedPublicationCardService
      .getfileValue('poster')
      .subscribe((data: File[]) => {
        const payload: ISendFileToStorageWithProgress = {
          files: data,
          progress: (event: number) =>
            this.feedPublicationCardService.setProgressFileValue(
              'poster',
              event
            ),
        };
        this.storageService.sendFileToStorageWithProgress(payload);
      });

    this.feedPublicationCardService
      .getfileValue('video')
      .subscribe((data: File[]) => {
        const payload: ISendFileToStorageWithProgress = {
          files: data,
          progress: (event: number) => {
            this.feedPublicationCardService.setProgressFileValue(
              'video',
              event
            );
          },
        };
        this.storageService.sendFileToStorageWithProgress(payload);
      });

    this.feedPublicationCardService.feedPublicationValue$.subscribe(
      console.log
    );
  }
}
