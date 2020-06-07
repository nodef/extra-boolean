/**
 * Checks if antecedent <=> consequent (x <=> y).
 * @param x antecedent
 * @param y consequent
 */
function eqv(x: boolean, y: boolean): boolean {
  return (x && y) || (!x && !y);
}
export default eqv;
