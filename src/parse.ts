import nimply from "./nimply";

const RNUM = /^[-+]?\d+$/;
const RTRU = /\b(?:t|y|1)\b|\b(?:\+|ay|go|on|up)|(?:tru|acc|asc|day|for|hot|inc|joy|new|pos|top|win|yes|dawn|full|safe|grow|high|just|real|some|know|live|love|open|pure|shin|warm|wis[de]|activ|admit|advan|agree|begin|brigh|build|creat|early|enter|float|f(?:i|ou)nd|grant|light|north|prett|prese|publi|start|succe|victr)/gi;
const RFAL = /\b(?:f|n|0)\b|(?:fal|off|dim|end|low|old|back|cold|cool|dark|dead|decr|desc|dirt|down|dull|dusk|exit|late|sink|ugly|absen|botto|close|finis|night|priva|south|wrong)/gi;
const RNEG = /\b(?:-|na|no|un|in|aft|bad|dis|lie|non|ben[dt]|den[iy]|empt|fail|fake|hate|los[es]|stop|decli|defea|destr|never|negat|refus|rejec|forget|shr[iu]nk|against|is.?nt|can.?(?:no)?t)|(?:hind)/gi;


/**
 * Converts string to boolean.
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
  if (RNUM.test(s)) return parseInt(s, 10) > 0;
  var t = s.search(RTRU) >= 0;
  var f = s.search(RFAL) >= 0;
  var n = (s.match(RNEG)||[]).length % 2 === 1;
  return nimply(f, t) === n;
}
export default parse;
