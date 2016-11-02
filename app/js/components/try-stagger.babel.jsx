import {h, Component} from 'preact';
import mojs from 'mo-js';
import addThunder from '../helpers/mojs-add-thunder';
import {Howl} from 'howler';

class TryStagger extends Component {
  render () {
    return  <div ref={ (el) => { this._el = el; } } />;
  }

  shouldComponentUpdate () {
    const {store} = this.context;
    const {cards} = store.getState();

    if (cards.present.tries === 0) { this._tries = 0; }

    if (cards.present.tries !== this._tries) {
      this._tries = cards.present.tries;
      this._stagger.timeline.replay();
    }

    return false;
  }

  componentDidMount () {
    const sound = new Howl({
      src: ['./sounds/zap.mp3', './sounds/zap.wav'],
      volume: .15
    });

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
      // fill:       ['#FF4E84', '#f5f5f5'],
      fill:       ['#FFD555', '#f5f5f5'],
      duration:   150,
      delay:      [ 150, 15, 50, 0 ],
      isShowEnd:  false,
      timeline: { onStart() { sound.play(); } }
    });

    const {store} = this.context;
    const {cards} = store.getState();

    this._tries = cards.present.tries;
  }
}

export default TryStagger;