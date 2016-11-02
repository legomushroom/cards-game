const INITIAL_STATE = {
  isConfirm:      false,
  isCongratsPlay: false,
  isCheat:        false,
  isCheatPlay:    false
};

const controls = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_CONFIRM': { return {...state, isConfirm: !state.isConfirm}; }
  case 'RESET_CONFIRM': { return {...state, isConfirm: false}; }
  case 'RESET_CARDS': { return {...state, isConfirm: false}; }
  case 'SET_CHEAT': { return {...state, isCheat: true, isCheatPlay: true}; }
  case 'RESET_CHEAT_PLAY': { return {...state, isCheatPlay: false}; }
  }
  return state;
};

export default controls;