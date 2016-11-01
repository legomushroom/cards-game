import { h, Component } from 'preact';
import { ActionCreators } from 'redux-undo';
import { bind } from 'decko';

import Icons from './icons';
import Card from './card';
import Scores from './scores';
import ResetButton from './reset-button';
import Button from './button';
import Congrats from './congrats';

const CLASSES = require('../../css/blocks/game.postcss.css.json');
require('../../css/blocks/game');

class Game extends Component {
  render() {
    const {store} = this.context;
    const state   = store.getState();
    const {cards} = state;
    
    const cardComponents = this._renderCards( cards.present.cards );

    return <div className={CLASSES.game} data-component="game">
              <Icons />
              <div className={CLASSES.game__inner}>
                <div className={CLASSES.game__right}>
                  <Scores state={state} />
                  <ResetButton state={state} />
                  <br/>
                  <br/>
                  <br/>
                  <Button onTap={this._undo} title="undo" />
                  <Button onTap={this._redo} title="redo" />
                </div>
                <div className={CLASSES.game__left}>
                  <Congrats state={state} />
                  {cardComponents}
                </div>
              </div>
            </div>;
  }

  @bind
  _undo() {
    const {store} = this.context;
    store.dispatch(ActionCreators.undo());
  }

  @bind
  redo() {
    const {store} = this.context;
    store.dispatch(ActionCreators.redo()); 
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