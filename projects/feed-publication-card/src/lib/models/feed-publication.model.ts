import { ProfileModel } from './member.model';

export abstract class FeedPublicationModel {
  _id: string;
  createdAt: string;
  updatedAt: string;
  like: {
    likeNumber: number;
    likeId: string;
    isLike: boolean;
  };
  profile: ProfileModel;
  profileTagged: string[];
  commentNumber: number;
  hastags: string[];
  signAt: string[];
  title: string;

  constructor(public type: string) {}
}

export class PicturePublicationModel extends FeedPublicationModel {
  constructor(
    title: string,
    hastags: string[],
    signAt: string[],
    public imgUrl: string
  ) {
    super('PicturePublication');
    this.title = title;
    this.hastags = hastags;
    this.signAt = signAt;
  }
}

export class PostPublicationModel extends FeedPublicationModel {
  constructor(
    title: string,
    hastags: string[],
    signAt: string[],
    public background: BackgroundPostModel
  ) {
    super('PostPublication');
    this.title = title;
    this.hastags = hastags;
    this.signAt = signAt;
  }
}

export class VideoPublicationModel extends FeedPublicationModel {
  constructor(
    title: string,
    hastags: string[],
    signAt: string[],
    public posterUrl: string,
    public videoUrl: string
  ) {
    super('VideoPublication');
    this.title = title;
    this.hastags = hastags;
    this.signAt = signAt;
  }
}

export class BackgroundPostModel {
  colors: string[];
  orientations: {
    start: number[];
    end: number[];
  };
  constructor(
    colors: string[],
    orientations: { start: number[]; end: number[] }
  ) {
    this.colors = colors;
    this.orientations = orientations;
  }
}
