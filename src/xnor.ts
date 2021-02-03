import xor from "./xor";


/**
 * Checks if even no. of values are true.
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
 * xnor(true, true)               === true
 * xnor(false, true)              === false
 * xnor(true, true, false, false) === true
 * xnor(true, true, true, false)  === false
 * ```
 */
function xnor(a: boolean=false, b: boolean=false, c:boolean=false, d: boolean=false,
              e: boolean=false, f: boolean=false, g:boolean=false, h: boolean=false): boolean {
return !xor(a, b, c, d, e, f, g, h);
}
export default xnor;
