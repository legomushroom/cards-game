
export default (o={}) => {
  return {
    type: o.type || 'pan',
    isOpen: o.isOpen || false,
    isPlay: o.isPlay || false
  };
};