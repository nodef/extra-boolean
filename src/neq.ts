import eq from "./eq";


/**
 * Checks if antecedent ⇎ consequent (a ⇎ b).
 * @param a antecedent
 * @param b consequent
 * @example
 * ```javascript
 * neq(true, false)  === true
 * neq(false, true)  === true
 * neq(true, true)   === false
 * neq(false, false) === false
 * ```
 */
function neq(a: boolean, b: boolean): boolean {
  return !eq(a, b);
}
export default neq;
