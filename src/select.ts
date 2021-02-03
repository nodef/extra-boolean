/**
 * Checks if ith value is true.
 * @param i index
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
 * select(0, true, false)              === true
 * select(1, true, false)              === false
 * select(1, true, true, false, false) === true
 * select(2, true, true, false, false) === false
 * ```
 */
function select(i: number,
                a: boolean=false, b: boolean=false, c:boolean=false, d: boolean=false,
                e: boolean=false, f: boolean=false, g:boolean=false, h: boolean=false): boolean {
  switch (i) {
    case 0: return a;
    case 1: return b;
    case 2: return c;
    case 3: return d;
    case 4: return e;
    case 5: return f;
    case 6: return g;
    case 7: return h;
    default: return false;
  }
}
export default select;
