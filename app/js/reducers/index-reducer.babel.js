import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import cards    from './cards-reducer';
import controls from './controls-reducer';

const UNDOABLE_OPTS = {
  limit: 10,
  filter: function filterActions(action, currState, history) {
    return action.isRecord; // only add to history if isRecord set on action
  },
  debug: false
};

import recycleState from 'redux-recycle';

const reducer = recycleState(combineReducers({
  // cards:          undoable(cards, { ...UNDOABLE_OPTS }),
  cards, controls
}), ['SET_STATE'], (state, action) => action.data );

export default reducer;