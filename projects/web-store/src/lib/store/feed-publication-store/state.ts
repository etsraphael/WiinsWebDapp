import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IFeedPublicationCard } from '../../interfaces';

export const featureAdapter: EntityAdapter<IFeedPublicationCard> =
  createEntityAdapter<IFeedPublicationCard>({
    selectId: model => model._id,
    sortComparer: (a: IFeedPublicationCard, b: IFeedPublicationCard): number =>
      b.createdAt.toString().localeCompare(a.createdAt.toString()),
  });

export interface State extends EntityState<IFeedPublicationCard> {
  isLoading: boolean;
  error: string;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null,
});
