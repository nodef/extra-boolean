/**
 * Reads a text, and converts it to a boolean value.
 * @param {string} x text to read
 * @returns {boolean} true if text => true
 */
function parse(x) {
  var fal = x.search(/(negati|never|refus|wrong|fal|off)|\b(f|n|0)\b/gi)<0? 0:1;
  var not = (x.match(/\b(nay|nah|no|dis|un|in)/gi)||[]).length & 1;
  return !(fal^not);
}
module.exports = parse;
