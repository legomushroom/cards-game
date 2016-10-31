import {h, Component} from 'preact';

require('../../css/blocks/congrats');
const CLS = require('../../css/blocks/congrats.postcss.css.json');

class CongratsHand extends Component {
  render () {
    return  <div className={CLS['congrats__hand']}>
              <div  className={CLS['congrats__arm']}
                    ref={ (el) => { this._arm = el; } } />
              <svg viewBox="0 0 573 298">
                <path
                  ref={ (el) => { this._handPath = el; } }
                  fill="none" d="M4.640625,4.57421921 C4.640625,4.57421921 27.6132812,145.660161 129.006925,38.5117187 C268.13494,-108.512783 562.519531,283.124996 567.878906,293.308594" stroke="#FFCE87" stroke-width="9" />
              </svg>
            </div>;
  }

  componentDidMount () {
    const timeline = new mojs.Timeline;

    const pathLength = 741.6953735351562;
    const html = new mojs.Html({
      el: this._handPath,
      strokeDasharray: pathLength,
      strokeDashoffset: { [-pathLength]: 0 },
      // delay: 500,
      duration: 1500
    });

      el: this._arm,
      path: this._handPath,
      isReverse: true,
      fill: { container: this.base, rule: 'width' },
      isAngle: true,
      // easing: 'cubic.out',
      // pathStart: .75,
      pathEnd: .5,
      // strokeDasharray: 700,
      // strokeDashoffset: { [-700]: 0 },
      // delay: 500,
      duration: 1500
    });

    timeline.add( html, arm.timeline );

    this.props.timeline.add( timeline );
  }
}

export default CongratsHand;