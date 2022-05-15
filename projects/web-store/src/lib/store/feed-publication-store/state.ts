import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { FeedPublicationModelInterface } from 'projects/common-interfaces';

export const featureAdapter: EntityAdapter<FeedPublicationModelInterface> =
  createEntityAdapter<FeedPublicationModelInterface>({
    selectId: model => model._id,
    sortComparer: (
      a: FeedPublicationModelInterface,
      b: FeedPublicationModelInterface
    ): number => b.createdAt.toString().localeCompare(a.createdAt.toString()),
  });

export interface State extends EntityState<FeedPublicationModelInterface> {
  isLoading: boolean;
  error: string;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null,
});
