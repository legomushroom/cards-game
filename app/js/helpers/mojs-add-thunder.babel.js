/*
  Module to add custom shapes into `mojs`.
*/

import mojs from 'mo-js';

class Thunder extends mojs.CustomShape {
  getShape () {
    return '<path d="M51.8727183,41.74889 C58.2886587,41.7488903 68.5722743,41.74889 68.5722743,41.74889 L33.0518007,100 L33.0518007,58.6334484 L23,58.6334484 L23,0 L77.2673902,0 C77.2673902,0 55.1414441,36.0160828 51.8727183,41.74889 Z"></path>';
  }
}

mojs.addShape('thunder', Thunder);