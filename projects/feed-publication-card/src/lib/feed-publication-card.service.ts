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

  private getFileProgress(type: string): Observable<number> {
    switch (type) {
      case 'image':
        return this.imgPreviewProgress$.pipe(skipWhile(x => !x));
      case 'poster':
        return this.posterPreviewProgress$.pipe(skipWhile(x => !x));
      case 'video':
        return this.videoPreviewProgress$.pipe(skipWhile(x => !x));
      default:
        return throwError(() => 'Type not found');
    }
  }

  private setFilePreview(type: string, file: File[]): void {
    switch (type) {
      case 'image':
        return this.imgPreviewData.next(file);
      case 'poster':
        return this.posterPreviewData.next(file);
      case 'video':
        return this.videoPreviewData.next(file);
      default:
        return null;
    }
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

  openModalPublication(data: IFeedPublicationPayload): void {
    const config: IFeedPublicationConfig = {
      ...data,
      onChangeFilePreview: (type: string, files: File[]) =>
        this.setFilePreview(type, files),
      getFileProgress: (type: string) => this.getFileProgress(type),
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
