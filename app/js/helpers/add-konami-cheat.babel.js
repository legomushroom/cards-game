import Konami from 'konami-komando';

/*
  Function to add Konami code that will turn on time travel cheat.
  @param {Object} Store to dispatch on.
*/
export default (store) => {
  Konami({
    once: true,
    useCapture: true,
    callback() {
      const state = store.getState();
      const {controls} = state;
      if (controls.isCheat) { return; }
      store.dispatch({ type: 'SET_CHEAT' });
    }
  });
};