const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  if (!date) return "Unable to determine the time of year!";
  if (Object.getOwnPropertyNames(date).length > 0) throw new Error('Invalid date!');
  try {
    const month = date.getMonth();
    if (month >= 2 && month < 5) return "spring";
    if (month >= 5 && month < 8) return "summer";
    if (month >= 8 && month < 11) return "autumn";
    if (month < 2 || month === 11) return "winter";
  } catch {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason,
};
