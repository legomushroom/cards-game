import C from '../constants';

import shuffle  from './array-shuffle';
import makeCard from './make-card';
import clamp from '../helpers/clamp';

/*
  Factory function to create a collection of card objects.
  @returns {Array} Created collection of card objects.
*/
export default () => {
  let difficulty = C.DIFFICULTY + 2;
  difficulty = clamp(difficulty, 2, C.CARD_TYPES.length-1);

  const cards = [];
  const TYPES = C.CARD_TYPES;
  for (let i = 0; i < Math.floor(C.CARDS_AMOUNT/2); i++) {
    const index = i % difficulty;
    const type = TYPES[index];
    cards.push( makeCard({type}), makeCard({type}) );
  }
  return shuffle(cards);
};