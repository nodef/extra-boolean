/**
 * Converts string to boolean.
 * @param s a string
 */
function parse(s: string): boolean {
  var fal = s.search(/(negati|never|refus|wrong|fal|off)|\b(f|n|0)\b/gi)<0? 0:1;
  var not = (s.match(/\b(nay|nah|no|dis|un|in)/gi)||[]).length & 1;
  return !(fal^not);
}
export default parse;
