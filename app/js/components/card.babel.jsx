import { h, Component } from 'preact';
import C from '../constants';
import Hammer from 'hammerjs';
import Icon from './icon';

const CLASSES = require('../../css/blocks/card.postcss.css.json');
require('../../css/blocks/card');

class Card extends Component {
  componentDidMount () {
    const p       = this.props;
    const {store} = this.context;
    const mc      = new Hammer.Manager(this.base);
    mc.add(new Hammer.Tap);

    mc.on('tap', (e) => {
      if (p.isOpen) { return; }
      clearTimeout(this._tm);

      store.dispatch({ type: 'OPEN_CARD', data: p.id });

      store.dispatch({ type: 'CHECK_EQUAL_CARDS' });
      this._tm = setTimeout(()=> {
        store.dispatch({ type: 'CHECK_OPEN_CARDS' });
      }, C.OPEN_DELAY);
    });
  }

  render() {
    const p         = this.props;
    const type      = p.type;
    let   className = `${CLASSES.card} ${CLASSES['card--'+type]}`;

    if (p.isOpen) { className += ` ${CLASSES['is-open']}`; }

    return  <div className={className} data-component="card">
              <div className={CLASSES.card__inner}>
                <Icon shape={type} />
              </div>
            </div>;
  }
}

export default Card;
