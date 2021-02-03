/**
 * Checks if antecedent ⇔ consequent (a ⇔ b).
 * @param a antecedent
 * @param b consequent
 * @example
 * ```javascript
 * eq(true, true)   === true
 * eq(false, false) === true
 * eq(true, false)  === false
 * eq(false, true)  === false
 * ```
 */
function eq(a: boolean, b: boolean): boolean {
  return a === b;
}
export default eq;
