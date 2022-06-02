import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BackgroundPostModel } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private imgPreview: BehaviorSubject<string | ArrayBuffer> =
    new BehaviorSubject<string | ArrayBuffer>(null);
  imgPreview$: Observable<string | ArrayBuffer> =
    this.imgPreview.asObservable();

  generateBackground(payload: BackgroundPostModel): string {
    const deltaX = payload.orientations.end[0] - payload.orientations.start[0];
    const deltaY = payload.orientations.end[1] - payload.orientations.start[1];
    const deg = (Math.atan2(deltaY, deltaX) * 180.0) / Math.PI;
    return `linear-gradient(${deg}deg, ${payload.colors.join(', ')})`;
  }

  setImgPreview(img: string | ArrayBuffer): void {
    return this.imgPreview.next(img);
  }

  getImgPreview(): Observable<string | ArrayBuffer> {
    return this.imgPreview$;
  }
}
