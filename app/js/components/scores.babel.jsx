import { h, Component } from 'preact';
import TryStagger from './try-stagger';
import Ghost from './ghost';

const CLASSES = require('../../css/blocks/scores.postcss.css.json');
require('../../css/blocks/scores');

class Scores extends Component {
  render() {
    const {state} = this.props;
    const {cards} = state;

    const highSore = (cards.highScore != null)
      ? <span> / <em>{cards.highScore}</em> best</span>
      : null;

    return  <div className={CLASSES.scores} data-component="scores">
              <Ghost state={state} />
              <div className={CLASSES.scores__text}>
                <TryStagger state={state} />
                <em> {cards.tries} </em> { (cards.tries === 1) ? 'try' : 'tries' }
                {highSore}
              </div>
            </div>;
  }
}

export default Scores;
