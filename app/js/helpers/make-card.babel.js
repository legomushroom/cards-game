/*
  Factory function to create a card object.
  @param {Object} Options object with card properties.
  @returns {Object} Created card object.
*/
export default (o={}) => {
  return {
    type: o.type || 'pan',
    isOpen: o.isOpen || false,
    isPlay: o.isPlay || false
  };
};