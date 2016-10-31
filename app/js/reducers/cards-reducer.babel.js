import makeCards from '../helpers/make-cards';

const INITIAL_STATE = {
  cards:    makeCards(),
  tries:    0,
  prevID:   null,
  open:     []
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_CARD': {
      const id    = action.data;
      const {cards, open} = state;
      if ( cards[id].isOpen || open.length >= 2 ) {return state; }

      const newCards = [...cards];
      newCards[id] = { ...cards[id], isOpen: true };
      return {...state, cards: newCards, open: [...open, id] };
    }

    case 'CHECK_OPEN_CARDS': {
      const {cards, open} = state;
      if (open.length < 2) { return state; }

      const [id1, id2] = open;
      const first  = cards[id1];
      const second = cards[id2];

      if (first.type !== second.type) {
        const newCards = [...cards];
        newCards[id1]  = { ...first, isOpen: false };
        newCards[id2]  = { ...second, isOpen: false };
        return {...state, cards: newCards, open: [], tries: state.tries+1 };
      }

      return {...state, open: []};
    }

    case 'CHECK_EQUAL_CARDS': {
      const {cards, open} = state;
      if (open.length < 2) { return state; }

      const [id1, id2] = open;
      const first  = cards[id1];
      const second = cards[id2];

      if (first.type === second.type) {
        const newCards = [...cards];
        newCards[id1] = { ...first, isPlay: true };
        newCards[id2] = { ...second, isPlay: true };
        return {...state, open: [], cards: newCards};
      }
      return state;
    }

    case 'RESET_STATE': {
      const newState = { ...INITIAL_STATE, cards: makeCards() };
      return newState;
    }

    case 'CARDS_RESET_PLAY': {
      const [id1, id2] = action.data;
      
      const newState = { ...state };
      newState.cards = [...newState.cards];

      newState.cards[id1] = {
        ...newState.cards[id1],
        isPlay: false
      };

      newState.cards[id2] = {
        ...newState.cards[id2],
        isPlay: false
      };

      return newState;
    }

    // case 'CARD_LOCK_ANIMATION': {
    //   const newState = { ...state };
    //   newState.cards = [...newState.cards];

    //   const id1 = action.data[0];
    //   const id2 = action.data[1];

    //   newState.cards[id1] = {
    //     ...newState.cards[id1],
    //     _prevIsLocked: true
    //   };

    //   newState.cards[id2] = {
    //     ...newState.cards[id2],
    //     _prevIsLocked: true
    //   };

    //   return newState;
    // }

  }
  return state;
};

export default cardsReducer;