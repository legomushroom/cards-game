import {h, Component} from 'preact';
import mojs from 'mo-js';
import {Howl} from 'howler';

class CardStagger extends Component {
  render () { return  <div ref={ (el) => { this._el = el; } } />; }

  shouldComponentUpdate () { return false; }

  componentDidMount () {
    const sound = new Howl({
      src: ['./sounds/good.mp3', './sounds/good.wav'],
      volume: .5
    });

    const ShapeStagger = mojs.stagger( mojs.Shape );
    const stagger = new ShapeStagger({
      parent:     this._el,
      shape:      'rect',
      quantifier: 3,
      scale:      { 1.05: 1.25 },
      rx:         10,
      ry:         10,
      radiusX:    65/2,
      radiusY:    90/2,
      fill:       'none',
      stroke:     [ 'cyan', 'hotpink', 'white' ],
      // stroke:     ['#EC5351', '#F27B35', '#FFD555', 'white'],
      strokeWidth: {10: 0},
      duration:   350,
      delay:      'stagger(200, 100)',
      easing:     'quad.out',
      timeline:   { onStart() { sound.play(); } },
      isShowEnd:  false
    });

    this.props.timeline.add(stagger);
  }
}

export default CardStagger;