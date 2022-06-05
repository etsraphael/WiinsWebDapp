import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, filter, Observable, skipWhile } from 'rxjs';
import { FeedPublicationCardComponent } from './feed-publication-card.component';
import { IFeedPublicationConfig, IFeedPublicationPayload } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class FeedPublicationCardService {
  // image preview
  private imgPreviewData: BehaviorSubject<File[]> = new BehaviorSubject<File[]>(
    []
  );
  private imgPreview$: Observable<File[]> = this.imgPreviewData.asObservable();
  private imgPreviewProgress: BehaviorSubject<number> =
    new BehaviorSubject<number>(null);
  private imgPreviewProgress$: Observable<number> =
    this.imgPreviewProgress.asObservable();

  constructor(private dialog: MatDialog) {}

  openModalPublication(
    data: IFeedPublicationPayload
  ): MatDialogRef<FeedPublicationCardComponent> {
    const config: IFeedPublicationConfig = {
      ...data,
      onChangeImgPreview: (event: File[]) => this.setImgPreview(event),
      getImgPreviewProgress: () => this.getImgPreviewProgress(),
    };

    return this.dialog.open(FeedPublicationCardComponent, {
      panelClass: ['col-3', 'p-0'],
      data: config,
    });
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
}
