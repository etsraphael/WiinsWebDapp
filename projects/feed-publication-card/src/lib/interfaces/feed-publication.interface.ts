import { Observable } from 'rxjs';
import { BackgroundPostModel, ProfileModel } from '../models';

export interface IFeedCard {
  _id: string;
  createdAt: string;
  updatedAt: string;
  like: {
    likeNumber: number;
    likeId: string;
    isLike: boolean;
  };
  type: string;
  profile: ProfileModel;
  profileTagged: string[];
  commentNumber: number;
  hastags: string[];
  title: string;
  imgUrl?: string;
  background?: BackgroundPostModel;
  colors?: string[];
  orientations?: { start: number[]; end: number[] };
}

export interface IFeedPublicationPayload {
  linearBackgroundList: BackgroundPostModel[];
}

export interface IFeedPublicationConfig {
  linearBackgroundList: BackgroundPostModel[];
  onChangeImgPreview: (event: File[]) => void;
  getImgPreviewProgress: () => Observable<number>;
  onChangePosterPreview: (event: File[]) => void;
  getPosterPreviewProgress: () => Observable<number>;
  onChangeVideoPreview: (event: File[]) => void;
  getVideoPreviewProgress: () => Observable<number>;
}
