import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import {
  PicturePublicationModel,
  PostPublicationModel,
  VideoPublicationModel,
} from '../../model/publication/feed-publication.model';
import { featureAdapter, State } from './state';

export const getError = (state: State): string => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectState: MemoizedSelector<object, State> =
  createFeatureSelector<State>('feedPublication');

export const selectAllItems: (
  state: object
) => (
  | PicturePublicationModel
  | PostPublicationModel
  | VideoPublicationModel
)[] = featureAdapter.getSelectors(selectState).selectAll;

export const selectError: MemoizedSelector<object, any> = createSelector(
  selectState,
  getError
);

export const selectLoading: MemoizedSelector<object, boolean> = createSelector(
  selectState,
  getIsLoading
);
