import { Observable } from 'rxjs';
import {
  BackgroundPostModel,
  PicturePublicationModel,
  PostPublicationModel,
  ProfileModel,
  VideoPublicationModel,
} from '../models';

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
  backgroundSelected: number;
}

export interface IFeedPublicationConfig {
  linearBackgroundList: BackgroundPostModel[];
  backgroundSelected: number;
  onChangeFilePreview: (type: string, files: File[]) => void;
  getFileProgress: (type: string) => Observable<number>;
  saveFeedPublication: (
    event:
      | PicturePublicationModel
      | PostPublicationModel
      | VideoPublicationModel
  ) => void;
  resetProgess: (type: string) => void;
}
