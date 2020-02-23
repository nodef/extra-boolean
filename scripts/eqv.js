/**
 * Checks if antecedent <=> consequent (x <=> y).
 * @param {boolean} x antecedent
 * @param {boolean} y consequent
 */
function eqv(x, y) {
  return (x && y) || (!x && !y);
}
module.exports = eqv;
