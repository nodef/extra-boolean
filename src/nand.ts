import and from "./and";


/**
 * Checks if any value is false.
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
 * nand(true, false)             === true
 * nand(true, true)              === false
 * nand(true, true, false, true) === true
 * nand(true, true, true, true)  === false
 * ```
 */
function nand(a: boolean=true, b: boolean=true, c:boolean=true, d: boolean=true,
              e: boolean=true, f: boolean=true, g:boolean=true, h: boolean=true): boolean {
return !and(a, b, c, d, e, f, g, h);
}
export default nand;
