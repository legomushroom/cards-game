import shuffle  from './array-shuffle';
import makeCard from './make-card';
import C from '../constants';

export default () => {
  const cards = [];
  const TYPES = C.CARD_TYPES;
  for (let i = 0; i < C.CARDS_AMOUNT/2; i++) {
    const index = i % TYPES.length;
    const type = TYPES[index];
    cards.push( makeCard({type}), makeCard({type}) );
  }
  return shuffle(cards);
};