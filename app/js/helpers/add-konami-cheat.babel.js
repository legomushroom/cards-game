import Konami from 'konami-komando';
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