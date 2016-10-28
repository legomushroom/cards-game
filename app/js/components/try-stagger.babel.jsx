import {h, Component} from 'preact';
import mojs from 'mo-js';
import addThunder from '../helpers/mojs-add-thunder';

class TryStagger extends Component {
  render () {
    return  <div ref={ (el) => { this._el = el; } } />;
  }

  shouldComponentUpdate () {
    const {store} = this.context;
    const {cards} = store.getState();

    if (cards.tries !== this._tries) {
      this._tries = cards.tries;
      this._stagger.timeline.replay();
    }

    return false;
  }

  componentDidMount () {
    const ShapeStagger = mojs.stagger( mojs.Shape );
    this._stagger = new ShapeStagger({
      parent:     this._el,
      quantifier: 4,
      shape:      'thunder',
      scale:      { 1: .5 },
      left:       -10,
      y:          [ { [-2]: 3 }, -4, { [-7]: 2 } ],
      x:          [ { [-5]: -10 }, { 0: -2 }, { 2: -3 } ],
      radius:     'rand(8, 10)',
      fill:       ['#222222', 'hotpink'],
      duration:   150,
      delay:      [ 150, 15, 50, 0 ],
      isShowEnd:  false
    });

    this._tries = 0;
  }
}

export default TryStagger;