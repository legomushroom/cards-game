import { h, Component } from 'preact';
// import Icon from './icon';
const CLASSES = require('../../css/blocks/scores.postcss.css.json');
require('../../css/blocks/scores');

class Scores extends Component {
  render() {
    const {state} = this.props;
    const {cards} = state;

    return  <div className={CLASSES.scores} data-component="scores">
              <div className={CLASSES.scores__text}>
                <em>{cards.tries}</em> tries
              </div>
            </div>;
  }
}

export default Scores;
