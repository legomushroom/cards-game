import { h, Component } from 'preact';
import Hammer from 'hammerjs';

const CLASSES = require('../../css/blocks/button.postcss.css.json');
require('../../css/blocks/button');

class Button extends Component {
  render () {
    const p = this.props;

    return  <div  className={`${CLASSES['button']} ${p.className || ''}`}
                  data-component="button">
                {p.title || 'restart'}
            </div>;
  }

  componentDidMount () {
    if (!this.props.onTap) { return; }
    
    const mc = new Hammer.Manager(this.base);
    mc.add(new Hammer.Tap);

    mc.on('tap', (e) => { this.props.onTap(e) });
  }
}

export default Button;