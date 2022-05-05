import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  FeedPublicationModel,
  PicturePublicationModel,
  PostPublicationModel,
  VideoPublicationModel,
} from '../../model/publication/feed-publication.model';

export const featureAdapter: EntityAdapter<
  PicturePublicationModel | PostPublicationModel | VideoPublicationModel
> = createEntityAdapter<
  PicturePublicationModel | PostPublicationModel | VideoPublicationModel
>({
  selectId: (model) => model._id,
  sortComparer: (a: FeedPublicationModel, b: FeedPublicationModel): number =>
    b.createdAt.toString().localeCompare(a.createdAt.toString()),
});

export interface State
  extends EntityState<
    PicturePublicationModel | PostPublicationModel | VideoPublicationModel
  > {
  isLoading: boolean;
  error: string;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null,
});
