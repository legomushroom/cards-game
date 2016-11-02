/*
  Function to add cross-browser `pointer down` event.
  @param {Object} HTMLElement to add the event on.
  @param {Function} Callback for the event.
*/
export default (el, fn) => {
  if (window.navigator.msPointerEnabled) {
    el.addEventListener('MSPointerDown', fn);
  } else if ( window.ontouchstart !== undefined ) {
    el.addEventListener('touchstart', fn);
    el.addEventListener('mousedown', fn);
  } else {
    el.addEventListener('mousedown', fn);
  }
}