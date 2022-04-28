export abstract class FeedPublicationModel {
  _id: string;
  createdAt: string;
  updatedAt: string;
  like: {
    likeNumber: number;
    likeId: string;
    isLike: boolean;
  };
  profile?: any;
  page?: any;
  profileTagged: string[];
  commentNumber: number;
  hastags: string[];
  title: string;

  constructor(public type: string) {}
}

export class PicturePublicationModel extends FeedPublicationModel {
  constructor(title: string, public imgUrl: string) {
    super('PicturePublication');
    this.title = title
  }
}

export class PostPublicationModel extends FeedPublicationModel {
  constructor(public background: backgroundPostModel) {
    super('PostPublication');
  }
}

export class VideoPublicationModel extends FeedPublicationModel {
  constructor(public posterUrl: string, public videoUrl: string) {
    super('VideoPublication');
  }
}

export class backgroundPostModel {
  colors: string[];
  orientations: {
    x: number[];
    y: number[];
  };
}
