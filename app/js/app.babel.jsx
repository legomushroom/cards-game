import { Provider } from 'preact-redux';
import { render, h } from 'preact';
// import Icon from './components/icon';
import Game from './components/game';
import initStore from './store';

/*
  TODO:
    - memoneto
    - sounds
    - difficulty
    - readme
    - comments
*/

render(
  <Provider store={initStore()}>
    <Game />
  </Provider>,
  document.body
);