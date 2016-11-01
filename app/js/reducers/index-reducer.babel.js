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

const reducer = combineReducers({
  cards: undoable(cards, { ...UNDOABLE_OPTS }),
  // cards,
  controls
});

export default reducer;