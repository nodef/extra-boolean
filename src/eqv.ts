import eq from "./eq";


/**
 * Check if antecedent ⇔ consequent (a ⇔ b).
 * [📘](https://github.com/elmw/extra-boolean/wiki/eqv)
 * @param a antecedent
 * @param b consequent
 * @example
 * ```javascript
 * eqv(true, true)   === true
 * eqv(false, false) === true
 * eqv(true, false)  === false
 * eqv(false, true)  === false
 * ```
 */
function eqv(a: boolean, b: boolean): boolean {
  return eq(a, b);
}
export default eqv;
