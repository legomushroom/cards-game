import C from '../constants';

const IDs = [];
// let timeoutID = null;
const lock = (id) => {
  return (dispatch, getState) => {
    // timeoutID = setTimeout( ()=> {
      if (IDs.length === 1) {
        IDs.push(id);
        dispatch({ type: 'CARDS_RESET_PLAY', data: IDs });
        IDs.length = 0;
      } else { IDs.push(id); }
    // }, 10 );
  };
};

export default lock;