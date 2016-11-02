import C from '../constants';

/*
  Function to check open cards with some delay.
  @param {Function} Redux `dispatch` function.
  @param {Function} Redux `getState` function.
*/
let timeoutID = null;
const asyncCheck = (dispatch, getState) => {
  const {cards} = getState();
  const count = cards.present.open.length;

  if (count === 2 && !timeoutID) {
    timeoutID = setTimeout(() => {
      dispatch({ type: 'CHECK_OPEN_CARDS', isRecord: true });
      timeoutID = null;
    }, C.OPEN_DELAY);
  }
};

export default asyncCheck;