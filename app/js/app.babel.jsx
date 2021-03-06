import { Provider } from 'preact-redux';
import { render, h } from 'preact';
import Game from './components/game';
import initStore from './store';
import persist from './helpers/persist';
import addKonamiCheat from './helpers/add-konami-cheat';

const store = initStore();
render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.body
);

persist(store);
addKonamiCheat(store);