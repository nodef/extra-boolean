/**
 * Checks if antecedent => consequent (x => y).
 * @param {boolean} x antecedent
 * @param {boolean} y consequent
 */
function imp(x, y) {
  return !x || y;
}
module.exports = imp;
