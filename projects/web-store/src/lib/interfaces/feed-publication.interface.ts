import { BackgroundPostModel, ProfileModel } from '../models';

export interface IFeedPublicationCard {
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
