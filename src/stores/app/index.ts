import initialState from './state';
import createAction from './actions';
import type { State, Actions, SetState } from './types';

export default generateSelectors(
  createStore<State & Actions>()((set: SetState<State>) => ({
    ...initialState,
    ...createAction(set),
  })),
);
