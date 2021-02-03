import or from "./or";


/**
 * Checks if all values are false.
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
 * nor(false, false)               === true
 * nor(true, false)                === false
 * nor(false, false, false, false) === true
 * nor(false, false, true, false)  === false
 * ```
 */
function nor(a: boolean=false, b: boolean=false, c:boolean=false, d: boolean=false,
             e: boolean=false, f: boolean=false, g:boolean=false, h: boolean=false): boolean {
return !or(a, b, c, d, e, f, g, h);
}
export default nor;
