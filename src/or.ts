/**
 * Checks if any value is true.
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
 * or(true, false)                === true
 * or(false, false)               === false
 * or(false, true, false, true)   === true
 * or(false, false, false, false) === false
 * ```
 */
function or(a: boolean=false, b: boolean=false, c:boolean=false, d: boolean=false,
            e: boolean=false, f: boolean=false, g:boolean=false, h: boolean=false): boolean {
return a || b || c || d || e || f || g || h;
}
export default or;
