import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable, skipWhile } from 'rxjs';
import { FeedPublicationCardComponent } from './feed-publication-card.component';
import { IFeedPublicationPayload } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class FeedPublicationCardService {
  private imgPreviewData: BehaviorSubject<string | ArrayBuffer> =
    new BehaviorSubject<string | ArrayBuffer>(null);
  private imgPreview$: Observable<string | ArrayBuffer> =
    this.imgPreviewData.asObservable();

  constructor(private dialog: MatDialog) {}

  openModalPublication(
    data: IFeedPublicationPayload
  ): MatDialogRef<FeedPublicationCardComponent> {
    return this.dialog.open(FeedPublicationCardComponent, {
      panelClass: ['col-3', 'p-0'],
      data: {
        data,
        onChangeImgPreview: (event: string | ArrayBuffer) =>
          this.setImgPreview(event),
      },
    });
  }

  setImgPreview(img: string | ArrayBuffer): void {
    return this.imgPreviewData.next(img);
  }

  getImgPreview(): Observable<string | ArrayBuffer> {
    return this.imgPreview$.pipe(skipWhile(x => !x));
  }
}
