/*
  Function check if two cards have equal types.
  @param {Object} State of the cards branch.
  @param {Object} New state.
*/
const checkEqual = (state) => {
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
};