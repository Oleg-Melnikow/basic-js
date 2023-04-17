const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = [];
  let dubl = [...arr].filter((el) => el !== -1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      res.push(arr[i]);
    } else {
      const el = Math.min(...dubl);
      const el1 = dubl.indexOf(el);
      res.push(dubl[el1]);
      if (!el1) {
        dubl = dubl.slice(1);
      } else if (el1 && el1 >= 1) {
        dubl = [...dubl.slice(0, el1), ...dubl.slice(el1 + 1)];
      }
    }
  }
  return res;
}

module.exports = {
  sortByHeight,
};
