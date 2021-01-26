/**
 * Check if antecedent ⇒ consequent (a ⇒ b).
 * [📘](https://github.com/elmw/extra-boolean/wiki/imply)
 * @param a antecedent
 * @param b consequent
 * @example
 * ```javascript
 * imply(true, true)   === true
 * imply(false, true)  === true
 * imply(false, false) === true
 * imply(true, false)  === false
 * ```
 */
function imply(a: boolean, b: boolean): boolean {
  return !a || b;
}
export default imply;
