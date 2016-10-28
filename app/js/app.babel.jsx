import { Provider } from 'preact-redux';
import { render, h } from 'preact';
// import Icon from './components/icon';
import Game from './components/game';
import initStore from './store';

render(
  <Provider store={initStore()}>
    <Game />
  </Provider>,
  document.body
);

// /*
//   API wrapper above the app itself.
// */
// class API {}
// export default API;
