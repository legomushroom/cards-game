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
        return {...state, open: []};
      }
      return state;
    }

    case 'RESET_STATE': {
      const newState = { ...INITIAL_STATE, cards: makeCards() };
      return newState;
    }

  }
  return state;
};

export default cardsReducer;