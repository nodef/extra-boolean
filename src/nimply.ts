import imply from "./imply";


/**
 * Checks if antecedent ⇏ consequent (a ⇏ b).
 * @param a antecedent
 * @param b consequent
 * @example
 * ```javascript
 * nimply(true, false)  === true
 * nimply(true, true)   === false
 * nimply(false, true)  === false
 * nimply(false, false) === false
 * ```
 */
function nimply(a: boolean, b: boolean): boolean {
  return !imply(a, b);
}
export default nimply;
