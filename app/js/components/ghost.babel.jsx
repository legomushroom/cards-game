import { h, Component } from 'preact';
import Icon from './icon';

const CLASSES = require('../../css/blocks/ghost.postcss.css.json');
require('../../css/blocks/ghost');

class Scores extends Component {
  render() {
    return  <div className={CLASSES.ghost} data-component="ghost">
              <div className={CLASSES.ghost__inner}>
                <Icon shape="ghost" className={CLASSES.ghost__left} />
                <Icon shape="ghost" className={CLASSES.ghost__right} />
                <Icon shape="ghost" />
              </div>
              <div className={CLASSES.ghost__shadow} />
            </div>;
  }
}

export default Scores;
