/**
 * Checks if value is boolean.
 * @param v a value
 * ```javascript
 * is(true)  === true
 * is(false) === true
 * is(0)     === false
 * ```
 */
function is(v: any): boolean {
  return typeof v==="boolean";
}
export default is;
