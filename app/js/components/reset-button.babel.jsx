import { h, Component } from 'preact';
import C from '../constants';
import Hammer from 'hammerjs';

const CLS = require('../../css/blocks/reset-button.postcss.css.json');
require('../../css/blocks/reset-button');

class ResetButton extends Component {
  render() {
    const p = this.props;
    const {state} = this.props;
    const {controls} = state;

    const openClass = (controls.isConfirm) ? CLS['is-confirm'] : '';
    const className = `${CLS['reset-button']} ${openClass}`;

    return  <div className={className} data-component="reset-button">
              <button className={CLS['reset-button__main']}
                      ref={(el)=> { this._main = el; }}>reset</button>
              <button className={CLS['reset-button__confirm']}
                      ref={(el)=> { this._confirm = el; }}>sure?</button>
            </div>;
  }

  componentDidMount () {
    const {store} = this.context;
    const mainMC = new Hammer.Manager(this._main);
    const confirmMC = new Hammer.Manager(this._confirm);
    mainMC.add(new Hammer.Tap);
    confirmMC.add(new Hammer.Tap);

    mainMC.on('tap', (e) => { store.dispatch({ type: 'SET_CONFIRM' }); });
    confirmMC.on('tap', (e) => { store.dispatch({ type: 'RESET_STATE' }); });
  }
}

export default ResetButton;
