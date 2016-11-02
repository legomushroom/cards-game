import {h, Component} from 'preact';
import mojs from 'mo-js';

class KonamiBurst extends Component {
  render () {
    return  <span ref={ (el) => { this._el = el; } } />;
  }

  shouldComponentUpdate () {
    const {store} = this.context;
    const {controls} = store.getState();

    if (controls.isCheatPlay) { this._burst.replay(); }
    return false;
  }

  componentDidMount () {
    this._burst = new mojs.Burst({
      parent:   this._el,
      radius:   { 4: 49 },
      angle:    45,
      count:    12,
      top:      -2,
      children: {
        radius:       10,
        fill:         'white',
        scale:        { 1: 0, easing: 'sin.in' },
        pathScale:    [ .7, null ],
        degreeShift:  [ 13, null ],
        duration:     [ 500, 700 ],
        isForce3d:    true,
      },
      timeline: {
        onComplete: ()=> {
          this.context.store.dispatch({ type: 'RESET_CHEAT_PLAY' });
        }
      }
    });

    this._burst.el.style.zIndex = 1;
  }
}

export default KonamiBurst;