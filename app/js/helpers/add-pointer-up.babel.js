/*
  Function to add cross-browser `pointer up` event.
  @param {Object} HTMLElement to add the event on.
  @param {Function} Callback for the event.
*/
export default (el, fn) => {
  if (window.navigator.msPointerEnabled) {
    el.addEventListener('MSPointerUp', fn);
  } else if ( window.ontouchstart !== undefined ) {
    el.addEventListener('touchend', fn);
    el.addEventListener('mouseup', fn);
  } else {
    el.addEventListener('mouseup', fn);
  }
}