const CARD_TYPES = [
  'pan', 'spider', 'poison',
  'vampire', 'net', 'hat',
  'broom', 'hand', 'pumpkin',
  'grave', 'coffin', 'bat'
];

export default {
  CARD_TYPES,
  NAME:           'GUARANTEE_RATE_GAME_Hjs891ksPP',
  OPEN_DELAY:     400, // delay the not equal cards will be visible before flipped back
  CARDS_AMOUNT:   24,
  DIFFICULTY:     0, // [0-10]
  IS_PERSIST_STATE: true  // if need to persist the app state to localStorage
};