const INITIAL_STATE = {
  isConfirm: false,
  isCongratsPlay: false
};

const controls = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_CONFIRM': { return {...state, isConfirm: !state.isConfirm}; }
  case 'RESET_CONFIRM': { return {...state, isConfirm: false}; }
  case 'RESET_CARDS': { return {...state, isConfirm: false}; }
  }
  return state;
};

export default controls;