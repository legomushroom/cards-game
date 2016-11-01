
export default (fn) => {
  const unloadEvent = ('onpagehide' in window) ? 'pagehide' : 'beforeunload';
  window.addEventListener( unloadEvent, fn);
};