import { h, Component } from 'preact';
import Hammer from 'hammerjs';
import mojs from 'mo-js';

import C from '../constants';
import Icon from './icon';
import CardStagger from './card-stagger';
import checkOpenCards from '../actions/check-open-cards';
import lockAnimation from '../actions/card-lock-animation';

const CLASSES = require('../../css/blocks/card.postcss.css.json');
require('../../css/blocks/card');

class Card extends Component {
  componentDidMount () {
    const p       = this.props;
    const {store} = this.context;
    const mc      = new Hammer.Manager(this.base);
    mc.add(new Hammer.Tap);

    mc.on('tap', (e) => {
      store.dispatch({ type: 'OPEN_CARD', data: p.id, isRecord: true });
      store.dispatch({ type: 'CHECK_EQUAL_CARDS' });
      store.dispatch(checkOpenCards);
      store.dispatch({ type: 'RESET_CONFIRM' });
    });
  }

  componentWillMount() {
    const {store}   = this.context;
    this._timeline = new mojs.Timeline({
      onComplete: () => { store.dispatch(lockAnimation(this.props.id)); }
    });
  }
  componentDidUpdate() {
    this.props.isPlay && this._timeline.play();
  }

  render() {
    const p         = this.props;
    const type      = p.type;
    let   className = `${CLASSES.card} ${CLASSES['card--'+type]}`;

    if (p.isOpen) { className += ` ${CLASSES['is-open']}`; }

    return  <div className={className} data-component="card">
              <div className={CLASSES.card__inner}>
                <Icon shape={type} />
                <CardStagger timeline={this._timeline} />
              </div>
            </div>;
  }
}

export default Card;
