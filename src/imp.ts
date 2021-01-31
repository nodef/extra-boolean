import imply from "./imply";


/**
 * Check if antecedent ⇒ consequent (a ⇒ b).
 * @param a antecedent
 * @param b consequent
 * @example
 * ```javascript
 * imp(true, true)   === true
 * imp(false, true)  === true
 * imp(false, false) === true
 * imp(true, false)  === false
 * ```
 */
function imp(a: boolean, b: boolean): boolean {
  return imply(a, b);
}
export default imp;
