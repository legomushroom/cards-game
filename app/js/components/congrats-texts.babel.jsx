import {h, Component} from 'preact';
import mojs from 'mo-js';

require('../../css/blocks/congrats');
const CLS = require('../../css/blocks/congrats.postcss.css.json');

class Congrats extends Component {
  render () {
    const textClass1 = `${CLS['congrats__text']} ${CLS['congrats__text--1']}`;
    const textClass2 = `${CLS['congrats__text']} ${CLS['congrats__text--2']}`;
    const textClass3 = `${CLS['congrats__text']} ${CLS['congrats__text--3']}`;
    return  <div className={CLS['congrats__texts']}>
              <div  className={textClass1}
                    ref={(el) => { this._text1 = el; }}>
                great
              </div>
              <div  className={textClass2}
                    ref={(el) => { this._text2 = el; }}>
                job,
              </div>
              <div  className={textClass3}
                    ref={(el) => { this._text3 = el; }}>
                buddy!
              </div>
            </div>;
  }

  shouldComponentUpdate () { return false; }

  componentDidMount () {
    const timeline = new mojs.Timeline({ delay: 400 });

    timeline.add(this._createTextBurst( this._text1, 0, 0 ));
    timeline.add(this._createTextBurst( this._text2, 100, 1 ));
    timeline.add(this._createTextBurst( this._text3, 200, 2 ));

    this.props.timeline.add( timeline );
  }

  /*
    Method to bootstrap text animations.
    @param {Object} HTMLElement that the animation
                    will be added inside.
    @param {Number} Delay for the animation to start after.
    @param {Number} Index of the text block.
  */
  _createTextBurst ( parent, delay, i = 0 ) {
    const timeline = new mojs.Timeline({ delay });
    const colors = [ '#FF4B83', '#2AC1CB', '#344D6D' ];

    const burst2 = new mojs.Burst({
      parent,
      isShowStart: true,
      count:    3,
      radius:   { 0: 50 },
      angle:    90,
      children: { fill: '#FFD555', radius: 30 }
    });

    const burst1 = new mojs.Burst({
      parent,
      isShowStart: true,
      count:    5,
      radiusX:  { 50: 100 },
      children: { stroke: colors[i], shape: 'line', scaleY: 1 },
      timeline: {
        onStart () { parent.style.opacity = 1; },
        onRefresh () { parent.style.opacity = 0; }
      }
    });

    return timeline.add( burst1, burst2 );
  }
}

export default Congrats;