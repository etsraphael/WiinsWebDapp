import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, filter, Observable, skipWhile } from 'rxjs';
import { FeedPublicationCardComponent } from './feed-publication-card.component';
import { IFeedPublicationConfig, IFeedPublicationPayload } from './interfaces';
import {
  PicturePublicationModel,
  PostPublicationModel,
  VideoPublicationModel,
} from './models';

@Injectable({
  providedIn: 'root',
})
export class FeedPublicationCardService {
  // image
  private imgPreviewData: BehaviorSubject<File[]> = new BehaviorSubject<File[]>(
    []
  );
  private imgPreview$: Observable<File[]> = this.imgPreviewData.asObservable();
  private imgPreviewProgress: BehaviorSubject<number> =
    new BehaviorSubject<number>(null);
  private imgPreviewProgress$: Observable<number> =
    this.imgPreviewProgress.asObservable();

  // poster
  private posterPreviewData: BehaviorSubject<File[]> = new BehaviorSubject<
    File[]
  >([]);
  private posterPreview$: Observable<File[]> =
    this.posterPreviewData.asObservable();
  private posterPreviewProgress: BehaviorSubject<number> =
    new BehaviorSubject<number>(null);
  private posterPreviewProgress$: Observable<number> =
    this.posterPreviewProgress.asObservable();

  // video
  private videoPreviewData: BehaviorSubject<File[]> = new BehaviorSubject<
    File[]
  >([]);
  private videoPreview$: Observable<File[]> =
    this.videoPreviewData.asObservable();
  private videoPreviewProgress: BehaviorSubject<number> =
    new BehaviorSubject<number>(null);
  private videoPreviewProgress$: Observable<number> =
    this.videoPreviewProgress.asObservable();

  // save feed publication
  private saveFeedPublication: BehaviorSubject<
    PicturePublicationModel | PostPublicationModel | VideoPublicationModel
  > = new BehaviorSubject<
    PicturePublicationModel | PostPublicationModel | VideoPublicationModel
  >(null);
  private saveFeedPublication$: Observable<
    PicturePublicationModel | PostPublicationModel | VideoPublicationModel
  > = this.saveFeedPublication.asObservable();

  constructor(private dialog: MatDialog) {}

  openModalPublication(
    data: IFeedPublicationPayload
  ): MatDialogRef<FeedPublicationCardComponent> {
    const config: IFeedPublicationConfig = {
      ...data,
      onChangeImgPreview: (event: File[]) => this.setImgPreview(event),
      getImgPreviewProgress: () => this.getImgPreviewProgress(),
      onChangePosterPreview: (event: File[]) => this.setPosterPreview(event),
      getPosterPreviewProgress: () => this.getPosterPreviewProgress(),
      onChangeVideoPreview: (event: File[]) => this.setVideoPreview(event),
      getVideoPreviewProgress: () => this.getVideoPreviewProgress(),
      saveFeedPublication: (
        event:
          | PicturePublicationModel
          | PostPublicationModel
          | VideoPublicationModel
      ) => this.setSaveFeedPublication(event),
      resetProgess: (type: string) => this.resetProgess(type),
    };

    return this.dialog.open(FeedPublicationCardComponent, {
      panelClass: ['col-3', 'p-0'],
      data: config,
    });
  }

  resetProgess(type: string): void {
    switch (type) {
      case 'picture':
        return this.imgPreviewProgress.next(null);
      case 'poster':
        return this.posterPreviewProgress.next(null);
      case 'video':
        return this.videoPreviewProgress.next(null);
    }
  }

  setImgPreviewProgress(value: number): void {
    return this.imgPreviewProgress.next(value);
  }

  getImgPreviewProgress(): Observable<number> {
    return this.imgPreviewProgress$.pipe(skipWhile(x => !x));
  }

  setImgPreview(img: File[]): void {
    return this.imgPreviewData.next(img);
  }

  getImgPreview(): Observable<File[]> {
    return this.imgPreview$.pipe(
      skipWhile(x => x.length === 0),
      filter(x => !!x)
    );
  }

  setPosterPreviewProgress(value: number): void {
    return this.posterPreviewProgress.next(value);
  }

  getPosterPreviewProgress(): Observable<number> {
    return this.posterPreviewProgress$.pipe(skipWhile(x => !x));
  }

  setPosterPreview(img: File[]): void {
    return this.posterPreviewData.next(img);
  }

  getPosterPreview(): Observable<File[]> {
    return this.posterPreview$.pipe(
      skipWhile(x => x.length === 0),
      filter(x => !!x)
    );
  }

  setVideoPreviewProgress(value: number): void {
    return this.videoPreviewProgress.next(value);
  }

  getVideoPreviewProgress(): Observable<number> {
    return this.videoPreviewProgress$.pipe(skipWhile(x => !x));
  }

  setVideoPreview(img: File[]): void {
    return this.videoPreviewData.next(img);
  }

  getVideoPreview(): Observable<File[]> {
    return this.videoPreview$.pipe(
      skipWhile(x => x.length === 0),
      filter(x => !!x)
    );
  }

  private setSaveFeedPublication(
    event:
      | PicturePublicationModel
      | PostPublicationModel
      | VideoPublicationModel
  ): void {
    return this.saveFeedPublication.next(event);
  }

  getSaveFeedPublication(): Observable<
    PicturePublicationModel | PostPublicationModel | VideoPublicationModel
  > {
    return this.saveFeedPublication$.pipe(
      skipWhile(x => !x),
      filter(x => !!x)
    );
  }
}
