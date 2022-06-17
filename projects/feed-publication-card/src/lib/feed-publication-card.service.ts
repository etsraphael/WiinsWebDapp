import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  BehaviorSubject,
  filter,
  Observable,
  skipWhile,
  throwError,
} from 'rxjs';
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

  openModalPublication(data: IFeedPublicationPayload): void {
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

    this.dialog.open(FeedPublicationCardComponent, {
      panelClass: ['col-3', 'p-0'],
      data: config,
    });
  }

  private resetProgess(type: string): void {
    switch (type) {
      case 'picture':
        return this.imgPreviewProgress.next(null);
      case 'poster':
        return this.posterPreviewProgress.next(null);
      case 'video':
        return this.videoPreviewProgress.next(null);
    }
  }

  getImgPreviewProgress(): Observable<number> {
    return this.imgPreviewProgress$.pipe(skipWhile(x => !x));
  }

  setImgPreview(img: File[]): void {
    return this.imgPreviewData.next(img);
  }

  getPosterPreviewProgress(): Observable<number> {
    return this.posterPreviewProgress$.pipe(skipWhile(x => !x));
  }

  setPosterPreview(img: File[]): void {
    return this.posterPreviewData.next(img);
  }

  getVideoPreviewProgress(): Observable<number> {
    return this.videoPreviewProgress$.pipe(skipWhile(x => !x));
  }

  setVideoPreview(img: File[]): void {
    return this.videoPreviewData.next(img);
  }

  private setSaveFeedPublication(
    event:
      | PicturePublicationModel
      | PostPublicationModel
      | VideoPublicationModel
  ): void {
    return this.saveFeedPublication.next(event);
  }

  get feedPublicationValue$(): Observable<
    PicturePublicationModel | PostPublicationModel | VideoPublicationModel
  > {
    return this.saveFeedPublication$.pipe(
      skipWhile(x => !x),
      filter(x => !!x)
    );
  }

  setProgressFileValue(type: string, value: number): void {
    switch (type) {
      case 'image':
        return this.imgPreviewProgress.next(value);
      case 'poster':
        return this.posterPreviewProgress.next(value);
      case 'video':
        return this.videoPreviewProgress.next(value);
      default:
        return null;
    }
  }

  getfileValue(type: string): Observable<File[]> {
    switch (type) {
      case 'image':
        return this.imgPreview$.pipe(
          skipWhile(x => x.length === 0),
          filter(x => !!x)
        );
      case 'poster':
        return this.posterPreview$.pipe(
          skipWhile(x => x.length === 0),
          filter(x => !!x)
        );
      case 'video':
        return this.videoPreview$.pipe(
          skipWhile(x => x.length === 0),
          filter(x => !!x)
        );
      default:
        return throwError(() => 'Type not found');
    }
  }
}
