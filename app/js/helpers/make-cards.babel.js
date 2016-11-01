import C from '../constants';

import shuffle  from './array-shuffle';
import makeCard from './make-card';
import clamp from '../helpers/clamp';

export default (difficulty=0) => {

  difficulty += 2;
  difficulty = clamp(difficulty, 2, C.CARD_TYPES.length-1);
  difficulty = 2;

  const cards = [];
  const TYPES = C.CARD_TYPES;
  for (let i = 0; i < Math.floor(C.CARDS_AMOUNT/2); i++) {
    const index = i % difficulty;
    const type = TYPES[index];
    cards.push( makeCard({type}), makeCard({type}) );
  }
  return shuffle(cards);
};