const RFALSE = /(negati|never|refus|wrong|fal|off)|\b(f|n|0)\b/gi;
const RNEGATE = /\b(nay|nah|no|dis|un|in)/gi;

/**
 * Convert string to boolean.
 * [📘](https://github.com/nodef/extra-boolean/wiki/parse)
 * @param s a string
 * @example
 * ```javascript
 * parse("1")        === true
 * parse("truthy")   === true
 * parse("not off")  === true
 * parse("not true") === false
 * parse("inactive") === false
 * parse("disabled") === false
 * ```
 */
function parse(s: string): boolean {
  var f = s.search(RFALSE) >= 0;
  var n = (s.match(RNEGATE)||[]).length % 2 === 1;
  return f === n;
}
export default parse;
