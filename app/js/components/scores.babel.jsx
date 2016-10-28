import { h, Component } from 'preact';
import TryStagger from './try-stagger';
// import Icon from './icon';
const CLASSES = require('../../css/blocks/scores.postcss.css.json');
require('../../css/blocks/scores');

class Scores extends Component {
  render() {
    const {state} = this.props;
    const {cards} = state;

    return  <div className={CLASSES.scores} data-component="scores">
              <div className={CLASSES.scores__text}>
                <TryStagger state={state} />
                <em> {cards.tries} </em> { (cards.tries === 1) ? 'try' : 'tries' }
              </div>
            </div>;
  }
}

export default Scores;
