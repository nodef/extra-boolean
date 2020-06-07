/**
 * Checks if antecedent => consequent (x => y).
 * @param x antecedent
 * @param y consequent
 */
function imp(x: boolean, y: boolean): boolean {
  return !x || y;
}
export default imp;
