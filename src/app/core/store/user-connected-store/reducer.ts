import { ActionsUser, ActionTypes } from './actions';
import { State, initialState } from './state';

export function featureReducer(state: State = initialState, action: ActionsUser) {
  switch (action.type) {
    case '@user-logout' as any: return initialState;
    default: return state;
  }
}
