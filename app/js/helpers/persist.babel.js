import C from '../constants';
import addUnload from './add-unload';

export default (store) => {
  if (C.IS_PERSIST_STATE) {
    // save to localstorage
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
  } else {
    try {
      localStorage.removeItem(C.NAME);
    } catch (e) { console.error(e); }
  }
};

