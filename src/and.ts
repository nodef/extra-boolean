/**
 * Check if all values are true.
 * [📘](https://github.com/elmw/extra-boolean/wiki/and)
 * @param a 1st boolean
 * @param b 2nd boolean
 * @param c 3rd boolean
 * @param d 4th boolean
 * @param e 5th boolean
 * @param f 6th boolean
 * @param g 7th boolean
 * @param h 8th boolean
 * @example
 * ```javascript
 * and(true, true)              === true
 * and(true, false)             === false
 * and(true, true, true, true)  === true
 * and(true, false, true, true) === false
 * ```
 */
function and(a: boolean=true, b: boolean=true, c:boolean=true, d: boolean=true,
             e: boolean=true, f: boolean=true, g:boolean=true, h: boolean=true): boolean {
  return a && b && c && d && e && f && g && h;
}
export default and;
