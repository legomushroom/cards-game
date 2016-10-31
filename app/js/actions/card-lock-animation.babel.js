import C from '../constants';

const IDs = [];
const lock = (id) => {
  return (dispatch, getState) => {
    if (IDs.length === 1) {
      IDs.push(id);
      dispatch({ type: 'CARDS_RESET_PLAY', data: IDs });
      IDs.length = 0;
    } else { IDs.push(id); }
  };
};

export default lock;