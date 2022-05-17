import { Action } from '@ngrx/store';
import { FeedPublicationModelInterface } from '@wiins/common-interfaces';

export enum ActionTypes {
  ADD_FEED_PUBLICATION = '@feed_publication/add',
  ADD_FEED_PUBLICATION_SUCCESS = '@feed_publication/add_success',
  ADD_FEED_PUBLICATION_FAIL = '@feed_publication/add_fail',

  REMOVE_FEED_PUBLICATION = '@feed_publication/remove',
  REMOVE_FEED_PUBLICATION_SUCCESS = '@feed_publication/remove_success',
  REMOVE_FEED_PUBLICATION_FAIL = '@feed_publication/remove_fail',

  LOAD_FEED_PUBLICATION = '@feed_publication/load',
  LOAD_FEED_PUBLICATION_FAIL = '@feed_publication/load__fail',
  LOAD_FEED_PUBLICATION_SUCCESS = '@feed_publication/load_success',

  UPDATE_FEED_PUBLICATION_LIKE = '@update_feed/like',
  UPDATE_FEED_PUBLICATION_DISLIKE = '@update_feed/dislike',
  RESET_FEED_PUBLICATION = '@feed_publication/reset',
}

export class ResetFeed implements Action {
  readonly type = ActionTypes.RESET_FEED_PUBLICATION;
}

export class AddFeedPublication implements Action {
  readonly type = ActionTypes.ADD_FEED_PUBLICATION;
  constructor(public payload: FeedPublicationModelInterface) {}
}

export class AddFeedPublicationSuccess implements Action {
  readonly type = ActionTypes.ADD_FEED_PUBLICATION_SUCCESS;
  constructor(public payload: FeedPublicationModelInterface) {}
}

export class AddFeedPublicationFail implements Action {
  readonly type = ActionTypes.ADD_FEED_PUBLICATION_FAIL;
  constructor(public message: string) {}
}

export class RemoveFeedPublication implements Action {
  readonly type = ActionTypes.REMOVE_FEED_PUBLICATION;
  constructor(public id: string) {}
}

export class RemoveFeedPublicationSuccess implements Action {
  readonly type = ActionTypes.REMOVE_FEED_PUBLICATION_SUCCESS;
  constructor(public payload: FeedPublicationModelInterface) {}
}

export class RemoveFeedPublicationFail implements Action {
  readonly type = ActionTypes.REMOVE_FEED_PUBLICATION_FAIL;
  constructor(public payload: string) {}
}

export class LoadFeedPublication implements Action {
  readonly type = ActionTypes.LOAD_FEED_PUBLICATION;
  constructor(
    public page: string,
    public payload: FeedPublicationModelInterface
  ) {}
}

export class LoadFeedPublicationFail implements Action {
  readonly type = ActionTypes.LOAD_FEED_PUBLICATION_FAIL;
  constructor(public payload: string) {}
}

export class LoadFeedPublicationSuccess implements Action {
  readonly type = ActionTypes.LOAD_FEED_PUBLICATION_SUCCESS;
  constructor(public payload: FeedPublicationModelInterface[]) {}
}

export class UpdateLike implements Action {
  readonly type = ActionTypes.UPDATE_FEED_PUBLICATION_LIKE;
  constructor(public id: string) {}
}

export class UpdateDisLike implements Action {
  readonly type = ActionTypes.UPDATE_FEED_PUBLICATION_DISLIKE;
  constructor(public id: string) {}
}

export type ActionsFeedPublication =
  | AddFeedPublication
  | AddFeedPublicationSuccess
  | AddFeedPublicationFail
  | LoadFeedPublication
  | LoadFeedPublicationFail
  | LoadFeedPublicationSuccess
  | RemoveFeedPublication
  | RemoveFeedPublicationSuccess
  | RemoveFeedPublicationFail
  | UpdateLike
  | UpdateDisLike
  | ResetFeed;
