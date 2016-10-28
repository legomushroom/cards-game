import C from '../constants';

let timeoutID = null;
const asyncCheck = (dispatch, getState) => {
  const {cards} = getState();
  const count = cards.open.length;

  if (count === 2 && !timeoutID) {
    timeoutID = setTimeout(() => {
      dispatch({ type: 'CHECK_OPEN_CARDS' });
      timeoutID = null;
    }, C.OPEN_DELAY);
  }
};

export default asyncCheck;