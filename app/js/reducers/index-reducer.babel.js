import { combineReducers } from 'redux';
import undoable from 'vendors/redux-undo';
import recycleState from 'redux-recycle';

import cards    from './cards-reducer';
import controls from './controls-reducer';

const UNDOABLE_OPTS = {
  limit: 10,
  filter: function filterActions(action, currState, history) {
    return action.isRecord; // only add to history if isRecord set on action
  }
};

const reducer = recycleState(combineReducers({
  cards: undoable(cards, { ...UNDOABLE_OPTS }),
  controls
}), ['SET_APP_STATE'], (state, action) => action.data );

export default reducer;