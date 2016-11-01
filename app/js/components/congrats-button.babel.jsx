import {h, Component} from 'preact';
import {bind} from 'decko';
import mojs from 'mo-js';

require('../../css/blocks/congrats');
const CLS = require('../../css/blocks/congrats.postcss.css.json');

class CongratsButton extends Component {
  render () {
    return  <button className={CLS['congrats__button']}
                    onClick={this._onClick}
                    ref={(el) => { this._button = el; }}>
              <span className={CLS['congrats__button-text']}
                    ref={(el) => { this._buttonText = el; }}>
                restart game
              </span>
            </button>;
  }

  shouldComponentUpdate () { return false; }

  componentDidMount () {
    const timeline = new mojs.Timeline({ delay: 200 });
    const ShapeStagger = mojs.stagger(mojs.Shape);

    const DURATION = 700;
    const text = new mojs.Html({
      el: this._buttonText,
      opacity:    { 0: 1 },
      x:          { [50] : 0 },
      easing:     'cubic.inout',
      duration:   DURATION,
      delay:      125
    });
    
    const button = new ShapeStagger({
      parent:     this._button,
      quantifier: 3,
      left:       0,
      fill:       ['#FF4B83', 'yellow', '#2AC1CB'],
      scale:      { 0 : 1 },
      radius:     155,
      duration:   DURATION,
      easing:     'cubic.inout',
      delay:      'stagger(75)'
    });

    timeline.add(button.timeline);
    timeline.add(text);

    this.props.timeline.add(timeline);
  }

  @bind
  _onClick () {
    const {store} = this.context;
    store.dispatch({ type: 'RESET_CARDS_HIGH_SCORE' });
  }
}

export default CongratsButton;
