import { FeedPublicationStoreState } from './feed-publication-store';
import { UserConnectedStoreState } from './user-connected-store';

export interface State {
    userConnected: UserConnectedStoreState.State;
    feedPublication: FeedPublicationStoreState.State;
}
