import { h, Component } from 'preact';
const CLASSES = require('../../css/blocks/icon.postcss.css.json');
require('../../css/blocks/icon');

class Icon extends Component {
  render () {
    const p = this.props;
    const {shape} = p;
    const markup = `<svg viewBox="0 0 32 32"><use xlink:href="#${shape}-shape" /></svg>`;

    const className = `${CLASSES.icon} ${p.className || ''}`;
    return  <div  className={className}
                  data-component="icon"
                  dangerouslySetInnerHTML={{ __html: markup }}>
                
            </div>;
  }
}

export default Icon;