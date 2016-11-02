/*
  Function to suffle an array.
  @param {Array} Array to shuffle items in.
  @returns {Array} The same mutated array with items shuffled items.
*/
export default (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
};