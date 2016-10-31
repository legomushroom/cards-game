import { h, Component } from 'preact';
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
}

export default Button;