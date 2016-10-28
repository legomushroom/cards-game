import { h, Component } from 'preact';
import Icons from './icons';
import Card from './card';
import Scores from './scores';
import ResetButton from './reset-button';

const CLASSES = require('../../css/blocks/game.postcss.css.json');
require('../../css/blocks/game');

class Game extends Component {
  render() {
    const {store} = this.context;
    const state   = store.getState();
    const {cards} = state;
    const cardComponents = this._renderCards( cards.cards );

    return <div className={CLASSES.game} data-component="game">
              <Icons />
              <div className={CLASSES.game__inner}>
                <div className={CLASSES.game__left}>
                  {cardComponents}
                </div>
                <div className={CLASSES.game__right}>
                  <Scores state={state} />
                  <ResetButton state={state} />
                </div>
              </div>
            </div>;
  }

  _renderCards (cards=[]) {
    const cardComponents = [];

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      cardComponents.push( <Card {...card} id={i} /> );
    }
    return cardComponents;
  }

  componentDidMount () {
    const {store} = this.context;

    store.subscribe(this.forceUpdate.bind(this));
  }
}

export default Game;