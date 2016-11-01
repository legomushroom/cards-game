import makeCards from '../helpers/make-cards';
import C from '../constants';

const INITIAL_STATE = {
  cards:      makeCards(),
  highScore:  null,
  tries:      0,
  pairsLeft:  C.CARDS_AMOUNT/2,
  prevID:     null,
  open:       []
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
      const pairsLeft = state.pairsLeft-1;
      newCards[id1] = { ...first, isPlay: (pairsLeft > 0) ? true : false };
      newCards[id2] = { ...second, isPlay: (pairsLeft > 0) ? true : false };
      return {...state, open: [], cards: newCards, pairsLeft };
    }
    return state;
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

  case 'RESET_CARDS': {
    const cards = makeCards(13);
    const highScore = state.highScore;
    const newState = { ...INITIAL_STATE, cards, highScore };
    return newState;
  }

  case 'RESET_CARDS_HIGH_SCORE': {
    const highScore = (state.highScore == null)
      ? state.tries : Math.min( state.highScore, state.tries );

    const newState = { ...INITIAL_STATE, cards: makeCards(), highScore };
    return newState;
  }

  }


  return state;
};

export default cardsReducer;