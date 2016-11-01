import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers/index-reducer';
// import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

const enhancer = compose(
  // persistState(),
  applyMiddleware(thunk)
);

const initStore = () => {
  return createStore( reducer, enhancer );
};

export default initStore;
