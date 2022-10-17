const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrayDNS = domains.map((el) => {
    const dns = [];
    const arr = el.split(".");
    for (let i = arr.length, j = 0; i > 0; i--, j++) {
      const last = arr[i - 1];
      if (!dns.length) {
        dns.push(`.${last}`);
      } else {
        dns.push(`${dns[j - 1]}.${last}`);
      }
    }
    return dns;
  });

  return arrayDNS.reduce((acc, cur) => {
    cur.forEach((el) => {
      if (!acc.hasOwnProperty(el)) {
        acc[el] = 1;
      } else {
        acc[el] += 1;
      }
    });
    return acc;
  }, {});
}

module.exports = {
  getDNSStats,
};
