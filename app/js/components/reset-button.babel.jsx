import { h, Component } from 'preact';
import Hammer from 'hammerjs';
import {ActionCreators} from 'vendors/redux-undo';

import C from '../constants';
import Button from './button';
import Icon from './icon';
import KonamiBurst from './konami-burst';

const CLS = require('../../css/blocks/reset-button.postcss.css.json');
require('../../css/blocks/reset-button');

class ResetButton extends Component {
  render() {
    const p = this.props;
    const {state} = this.props;
    const {controls, cards} = state;

    const openClass = (controls.isConfirm) ? CLS['is-confirm'] : '';
    const className = `${CLS['reset-button']} ${openClass}`;
    return  <div  className={className} data-component="reset-button">
              {this._renderReset(state)}
              {this._renderMomento(state)}
            </div>;
  }

  /*
    Method to render a part of the markup - reset + confirm buttons.
    @param {Object} State.
    @returns {Object} Renderred markup.
  */
  _renderReset(state) {
    return  <span className={CLS['reset-button__reset']}>
              <button className={CLS['reset-button__main']}
                      role="reset"
                      ref={(el)=> { this._main = el; }}>reset</button>

              <button className={CLS['reset-button__confirm']}
                      role="confirm reset"
                      ref={(el)=> { this._confirm = el; }}>sure?</button>
            </span>;
  }

  /*
    Method to render a part of the markup - undo button.
    @param {Object} State.
    @returns {Object} Renderred markup.
  */
  _renderMomento(state) {
    const {controls, cards} = state;

    const cheatClass = (controls.isCheat) ? CLS['is-cheat'] : '';
    const momentoClass = `${CLS['reset-button__momento']} ${cheatClass}`;
    const undoClass = `${momentoClass} ${(cards.past.length) ? '' : CLS['is-disable']}`;
    // const redoClass = `${momentoClass} ${(cards.future.length) ? '' : CLS['is-disable']}`;
    // <button className={redoClass}
    //         role="redo"
    //         ref={(el)=> { this._redo = el; }}>
    //   <Icon shape="redo" />
    // </button>
    return  <span style={{position: 'relative'}}>
              <button className={undoClass}
                      role="undo"
                      ref={(el)=> { this._undo = el; }}>
                <Icon shape="undo" />
              </button>
              <KonamiBurst state={state} />
            </span>;
  }

  componentDidMount () {
    const {store} = this.context;
    const mainMC = new Hammer.Manager(this._main);
    const confirmMC = new Hammer.Manager(this._confirm);
    const undoMC = new Hammer.Manager(this._undo);
    // const redoMC = new Hammer.Manager(this._redo);
    mainMC.add(new Hammer.Tap);
    confirmMC.add(new Hammer.Tap);
    undoMC.add(new Hammer.Tap);
    // redoMC.add(new Hammer.Tap);

    mainMC.on('tap', (e) => { store.dispatch({ type: 'SET_CONFIRM' }); });
    confirmMC.on('tap', (e) => {
      store.dispatch({ type: 'RESET_CARDS' });
      store.dispatch(ActionCreators.clearHistory());
    });

    undoMC.on('tap', (e) => { store.dispatch(ActionCreators.undo()); });
    // redoMC.on('tap', (e) => { store.dispatch(ActionCreators.redo()); });
  }
}

export default ResetButton;
