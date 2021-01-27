/**
 * Check if odd no. of values are true.
 * [📘](https://github.com/nodef/extra-boolean/wiki/xor)
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
 * xor(true, false)             === true
 * xor(true, true)              === false
 * xor(true, true, true, false) === true
 * xor(true, true, true, true)  === false
 * ```
 */
function xor(a: boolean=false, b: boolean=false, c:boolean=false, d: boolean=false,
             e: boolean=false, f: boolean=false, g:boolean=false, h: boolean=false): boolean {
return a !== b !== c !== d !== e !== f !== g !== h;
}
export default xor;
