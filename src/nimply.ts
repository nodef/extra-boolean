import imply from "./imply";


/**
 * Check if antecedent ⇏ consequent (a ⇏ b).
 * [📘](https://github.com/nodef/extra-boolean/wiki/nimply)
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
