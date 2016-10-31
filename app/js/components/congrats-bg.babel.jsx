import {h, Component} from 'preact';
import mojs from 'mo-js';

require('../../css/blocks/congrats');
const CLS = require('../../css/blocks/congrats.postcss.css.json');

class Congrats extends Component {
  render () {
    return  <div  className={CLS['congrats__background']}
                  ref={(el) => { this._bg = el; }} />;
  }

  shouldComponentUpdate () { return false; }

  componentDidMount () {
    const ShapeStagger = mojs.stagger( mojs.Shape );
    const OPTS = {
      parent: this._bg,
      quantifier: 5,
      x: 'rand(-50, 50)',
      y: 'rand(-50, 50)',
      fill: 'white',
      scale: { 0 : 1 },
      radius: 300,
      duration: 1000,
      delay: 'rand(0, 300)'
    };
    
    const bg1 = new ShapeStagger({
      ...OPTS,
      left: 'stagger(25%)',
      top:  'stagger(25%)'
    });

    const bg2 = new ShapeStagger({
      ...OPTS,
      left: [0, '100%'],
      top:  ['100%', 0]
    });

    this.props.timeline.add( bg1, bg2 );
  }

}

export default Congrats;