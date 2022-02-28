import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { UserModel } from '../../model/user/user.model';
import { State } from './state';

export const getUser = (state: State): UserModel => state.user!;

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading!;

export const getMessage = (state: State): string => state.message!;

export const selectState: MemoizedSelector<object, State> =
  createFeatureSelector<State>('UserConnected');

export const select = createSelector(selectState, getUser);

export const selectError = createSelector(selectState, getError);

export const selectMessage = createSelector(selectState, getMessage);

export const selectIsLoading = createSelector(selectState, getIsLoading);
