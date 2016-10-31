import {h, Component} from 'preact';
import mojs from 'mo-js';

require('../../css/blocks/congrats');
const CLS = require('../../css/blocks/congrats.postcss.css.json');

class CongratsCounter extends Component {
  render () {
    const {state} = this.props;
    const tries = state.cards.tries;

    return  <div  className={CLS['congrats__counter']}
                  ref={(el) => { this._counter = el; }}>
              <div  className={CLS['congrats__counter-number']}
                    ref={(el) => { this._number = el; }}>
              </div>
              <div  className={CLS['congrats__counter-footer']}>
                { (tries === 1) ? 'try' : 'tries' }
              </div>
            </div>;
  }

  componentDidMount () {
    const {state} = this.props;
    let tries = state.cards.tries;

    const counter = new mojs.Html({
      el: this._counter,
      opacity:    { 0: 1 },
      duration:   1200,
      delay:      900,
      easing:     'cubic.out',
      onStart: ()=> {
        const {store} = this.context;
        const state   = store.getState();
        tries = state.cards.tries;
      },
      onUpdate: (ep, p) => { this._number.innerHTML = Math.round(ep*tries); }
    });

    this.props.timeline.add( counter );
  }

}

export default CongratsCounter;