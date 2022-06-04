import { ActionsFeedPublication, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

export function featureReducer(
  state = initialState,
  action: ActionsFeedPublication
): State {
  switch (action.type) {
    case ActionTypes.ADD_FEED_PUBLICATION:
    case ActionTypes.LOAD_FEED_PUBLICATION:
    case ActionTypes.ADD_FEED_PUBLICATION_SUCCESS: {
      return { ...state };
      // return featureAdapter.addOne(action.payload, state);
    }
    case ActionTypes.REMOVE_FEED_PUBLICATION_SUCCESS: {
      return featureAdapter.removeOne(action.payload._id, state);
    }
    case ActionTypes.UPDATE_FEED_PUBLICATION_LIKE: {
      if (
        state.ids.length == 0 ||
        typeof state.entities[action.id] == 'undefined'
      )
        return state;
      const publication = state.entities[action.id];
      publication.like.likeNumber += 1;
      publication.like.isLike = true;

      return featureAdapter.updateOne(
        {
          id: action.id,
          changes: publication,
        },
        state
      );
    }
    case ActionTypes.UPDATE_FEED_PUBLICATION_DISLIKE: {
      if (
        state.ids.length == 0 ||
        typeof state.entities[action.id] == 'undefined'
      )
        return state;

      const publication = state.entities[action.id];
      publication.like.likeNumber -= 1;
      publication.like.isLike = false;

      return featureAdapter.updateOne(
        {
          id: action.id,
          changes: publication,
        },
        state
      );
    }
    case ActionTypes.LOAD_FEED_PUBLICATION_SUCCESS: {
      return featureAdapter.addMany(action.payload, {
        ...state,
        isLoading: false,
        error: null,
      });
    }
    case ActionTypes.ADD_FEED_PUBLICATION_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.message,
      };
    }
    case ActionTypes.RESET_FEED_PUBLICATION:
      return initialState;
    default:
      return { ...state };
  }
}
