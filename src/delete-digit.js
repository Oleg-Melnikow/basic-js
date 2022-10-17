const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const str = num.toString();
  let array = [];
  for (let i = 0; i < str.length; i++) {
    array.push(+(str.slice(0, i) + str.slice(i + 1)));
  }
  const max = array.reduce((acc, cur) => {
    return acc < cur ? cur : acc;
  });
  return max;
}

module.exports = {
  deleteDigit,
};
