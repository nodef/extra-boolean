/**
 * Count no. of true values.
 * [📘](https://github.com/elmw/extra-boolean/wiki/count)
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
 * count(true, true)                === 2
 * count(true, false)               === 1
 * count(true, true, true, false)   === 3
 * count(false, true, false, false) === 1
 * ```
 */
function count(a: boolean=false, b: boolean=false, c:boolean=false, d: boolean=false,
               e: boolean=false, f: boolean=false, g:boolean=false, h: boolean=false): number {
return (a? 1 : 0) + (b? 1 : 0) + (c? 1 : 0) + (d? 1 : 0) +
       (e? 1 : 0) + (f? 1 : 0) + (g? 1 : 0) + (h? 1 : 0);
}
export default count;
