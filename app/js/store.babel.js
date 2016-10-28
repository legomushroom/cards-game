import {createStore, compose} from 'redux';
import reducer from './reducers/index-reducer';
import persistState from 'redux-localstorage';

const enhancer = compose( persistState() );

const initStore = () => { return createStore( reducer, enhancer ); };

export default initStore;