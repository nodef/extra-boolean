/**
 * Check if antecedent ⇔ consequent (a ⇔ b).
 * [📘](https://github.com/nodef/extra-boolean/wiki/eq)
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
