const INITIAL_STATE = {
  isConfirm:      false,
  isCongratsPlay: false,
  isCheat:        true
};

const controls = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_CONFIRM': { return {...state, isConfirm: !state.isConfirm}; }
  case 'RESET_CONFIRM': { return {...state, isConfirm: false}; }
  case 'RESET_CARDS': { return {...state, isConfirm: false}; }
  case 'SET_CHEAT': { return {...state, isCheat: true}; }
  }
  return state;
};

export default controls;