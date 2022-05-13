import { Injectable } from '@angular/core';
import { BackgroundPostModel } from 'src/app/core/model/publication/feed-publication.model';

@Injectable({
  providedIn: 'root',
})
export class FeedPublicationMakerService {
  generateBackground(payload: BackgroundPostModel): string {
    const deltaX = payload.orientations.end[0] - payload.orientations.start[0];
    const deltaY = payload.orientations.end[1] - payload.orientations.start[1];
    const deg = (Math.atan2(deltaY, deltaX) * 180.0) / Math.PI;
    return `linear-gradient(${deg}deg, ${payload.colors.join(', ')})`;
  }
}
