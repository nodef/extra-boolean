/**
 * Checks if value is boolean.
 * @param {*} x a value
 * @returns {boolean} true if boolean
 */
function is(x) {
  return typeof x==='boolean';
}
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
/**
 * Gets exclusive-or of 2 boolean values.
 * @param {boolean} x first
 * @param {boolean} y second
 */
function xor(x, y) {
  return (x ^ y)!==0;
}
/**
 * Checks if antecedent => consequent (x => y).
 * @param {boolean} x antecedent
 * @param {boolean} y consequent
 */
function imp(x, y) {
  return !x || y;
}
/**
 * Checks if antecedent <=> consequent (x <=> y).
 * @param {boolean} x antecedent
 * @param {boolean} y consequent
 */
function eqv(x, y) {
  return (x && y) || (!x && !y);
}
exports.is = is;
exports.parse = parse;
exports.xor = xor;
exports.imp = imp;
exports.eqv = eqv;
