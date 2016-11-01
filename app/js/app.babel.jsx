import { Provider } from 'preact-redux';
import { render, h } from 'preact';
// import Icon from './components/icon';
import Game from './components/game';
import initStore from './store';
import addUnload from './helpers/add-unload';
import C from './constants';

/*
  TODO:
    - memoneto
    - sounds
    - difficulty
    - readme
    - comments
*/

const store = initStore();
render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.body
);

// save to loal storage
const prefix = 'localstorage';
addUnload(()=> {
  const preState = store.getState();
  delete preState.cards.history;
  try {
    localStorage.setItem(C.NAME, JSON.stringify( preState ) );
  } catch (e) { console.error(e); }
});

// load from localstorage
try {
  const stored = localStorage.getItem(C.NAME);
  if ( stored ) {
    store.dispatch({ type: 'SET_APP_STATE', data: JSON.parse(stored) });
  }
} catch (e) {
  console.error(e);
}

// localStorage.removeItem(C.NAME);
