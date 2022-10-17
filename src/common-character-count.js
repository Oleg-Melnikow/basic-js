const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(...str) {
  let result = [...str].map((el) => {
    const res = {};
      for(let i = 0; i < el.length; i++) {
        if(res[el[i]]) {
          res[el[i]] += 1;
        } else {
          res[el[i]] = 1;
        }
      }
      return res;
    });
    let [a1, a2] = result;
    if(Object.keys(a1).length && Object.keys(a2).length) {
      const [v1, v2] = result.map(el => Object.keys(el));
      console.log(v1, v2);
      const fil = v1.filter(el =>v2.indexOf( el ) > -1)
      const sum = fil.reduce((acc, cur) => {
        if(a1[cur] < a2[cur]) {
          return acc += a1[cur];
        }
        return acc += a2[cur];
      }, 0);
      return sum;
    } else {
      return 0;
    }
}

module.exports = {
  getCommonCharacterCount
};
