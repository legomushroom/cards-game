/*
  Function to clamp a value between two.
  @param {Number} Number to clamp.
  @param {Number} Min bound.
  @param {Number} Max bound.
  @returns {Numeber} Clamped value;
*/
export default (value, min, max) => {
  value = Math.min(value, max);
  value = Math.max(value, min);

  return value;
};