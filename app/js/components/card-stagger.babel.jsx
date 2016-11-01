import {h, Component} from 'preact';
import mojs from 'mo-js';

class CardStagger extends Component {
  render () { return  <div ref={ (el) => { this._el = el; } } />; }

  shouldComponentUpdate () { return false; }

  componentDidMount () {
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
      isShowEnd:  false
    });

    this.props.timeline.add(stagger);
  }
}

export default CardStagger;