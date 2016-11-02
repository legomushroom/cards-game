
/*
  Method to check whether the browser is IE.
  @returns {Boolean} If browser is IE.
*/
export default () => {
  const ua = window.navigator.userAgent;
  let rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer') {
    const re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape') {
    const re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv > -1;
};