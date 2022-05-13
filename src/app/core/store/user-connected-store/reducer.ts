import { ActionsUser } from './actions';
import { State, initialState } from './state';

export function featureReducer(state: State = initialState, action: ActionsUser) {
  switch (action.type) {
    default: return state;
  }
}
