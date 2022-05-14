import { ProfileModel } from 'projects/common-models';
import { BackgroundPostModel } from '../../model/publication/feed-publication.model';

export interface FeedPublicationModelInterface {
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
