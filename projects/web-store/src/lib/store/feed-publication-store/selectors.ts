import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { FeedPublicationModelInterface } from '@wiins/common-models';
import { featureAdapter, State } from './state';

export const getError = (state: State): string => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectState: MemoizedSelector<object, State> =
  createFeatureSelector<State>('feedPublication');

export const selectAllItems: (
  state: object
) => FeedPublicationModelInterface[] =
  featureAdapter.getSelectors(selectState).selectAll;

export const selectError: MemoizedSelector<object, string> = createSelector(
  selectState,
  getError
);

export const selectLoading: MemoizedSelector<object, boolean> = createSelector(
  selectState,
  getIsLoading
);
