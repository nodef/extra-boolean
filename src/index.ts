// METHODS
// =======

// ABOUT
// -----

/**
 * Check if value is a boolean.
 * @param v a value
 * @returns is boolean?
 */
export function is(v: any): v is boolean {
  return typeof v==="boolean";
}


const RNUMBER = /^[-+]?\d+$/;
const RTRUE   = /\b(?:t|y|1)\b|\b(?:\+|ay|go|on|up)|(?:tru|acc|asc|day|for|hot|inc|joy|new|pos|top|win|yes|dawn|full|safe|grow|high|just|real|some|know|live|love|open|pure|shin|warm|wis[de]|activ|admit|advan|agree|begin|brigh|build|creat|early|enter|float|f(?:i|ou)nd|grant|light|north|prett|prese|publi|start|succe|victr)/gi;
const RFALSE  = /\b(?:f|n|0)\b|(?:fal|off|dim|end|low|old|back|cold|cool|dark|dead|decr|desc|dirt|down|dull|dusk|exit|late|sink|ugly|absen|botto|close|finis|night|priva|south|wrong)/gi;
const RNEGATE = /\b(?:-|na|no|un|in|aft|bad|dis|lie|non|ben[dt]|den[iy]|empt|fail|fake|hate|los[es]|stop|decli|defea|destr|never|negat|refus|rejec|forget|shr[iu]nk|against|is.?nt|can.?(?:no)?t)|(?:hind)/gi;

/**
 * Convert string to boolean.
 * @param s a string
 * @returns s represents true?
 */
export function parse(s: string): boolean {
  if (RNUMBER.test(s)) return parseInt(s, 10) > 0;
  var t = s.search(RTRUE)  >= 0;
  var f = s.search(RFALSE) >= 0;
  var n = (s.match(RNEGATE)||[]).length % 2 === 1;
  return nimply(f, t) === n;
}




// SINGLE
// ------

/**
 * Check if value is false.
 * @param a a boolean
 * @returns ¬a?
 */
export function not(a: boolean): boolean {
  return !a;
}


/**
 * Check if antecedent ⇒ consequent.
 * @param a antecedent
 * @param b consequent
 * @returns a ⇒ b?
 */
export function imply(a: boolean, b: boolean): boolean {
  return !a || b;
}
export {imply as imp};


/**
 * Check if antecedent ⇏ consequent.
 * @param a antecedent
 * @param b consequent
 * @returns a ⇏ b?
 */
export function nimply(a: boolean, b: boolean): boolean {
  return !imply(a, b);
}


/**
 * Check if antecedent ⇔ consequent.
 * @param a antecedent
 * @param b consequent
 * @returns a ⇔ b?
 */
export function eq(a: boolean, b: boolean): boolean {
  return a === b;
}
export {eq as eqv};


/**
 * Check if antecedent ⇎ consequent.
 * @param a antecedent
 * @param b consequent
 * @returns a ⇎ b?
 */
export function neq(a: boolean, b: boolean): boolean {
  return !eq(a, b);
}




// BASIC
// -----

/**
 * Check if all values are true.
 * @param a 1st boolean
 * @param b 2nd boolean
 * @param c 3rd boolean
 * @param d 4th boolean
 * @param e 5th boolean
 * @param f 6th boolean
 * @param g 7th boolean
 * @param h 8th boolean
 * @returns a ^ b ^ ...?
 */
export function and(a: boolean=true, b: boolean=true, c:boolean=true, d: boolean=true,
  e: boolean=true, f: boolean=true, g:boolean=true, h: boolean=true): boolean {
  return a && b && c && d && e && f && g && h;
}


/**
 * Check if any value is false.
 * @param a 1st boolean
 * @param b 2nd boolean
 * @param c 3rd boolean
 * @param d 4th boolean
 * @param e 5th boolean
 * @param f 6th boolean
 * @param g 7th boolean
 * @param h 8th boolean
 * @returns ¬(a ^ b ^ ...)?
 */
export function nand(a: boolean=true, b: boolean=true, c:boolean=true, d: boolean=true,
  e: boolean=true, f: boolean=true, g:boolean=true, h: boolean=true): boolean {
  return !and(a, b, c, d, e, f, g, h);
}

/**
 * Check if any value is true.
 * @param a 1st boolean
 * @param b 2nd boolean
 * @param c 3rd boolean
 * @param d 4th boolean
 * @param e 5th boolean
 * @param f 6th boolean
 * @param g 7th boolean
 * @param h 8th boolean
 * @returns a ∨ b ∨ ...?
 */
export function or(a: boolean=false, b: boolean=false, c:boolean=false, d: boolean=false,
  e: boolean=false, f: boolean=false, g:boolean=false, h: boolean=false): boolean {
  return a || b || c || d || e || f || g || h;
}


/**
 * Check if all values are false.
 * @param a 1st boolean
 * @param b 2nd boolean
 * @param c 3rd boolean
 * @param d 4th boolean
 * @param e 5th boolean
 * @param f 6th boolean
 * @param g 7th boolean
 * @param h 8th boolean
 * @returns ¬(a ∨ b ∨ ...)?
 */
export function nor(a: boolean=false, b: boolean=false, c:boolean=false, d: boolean=false,
  e: boolean=false, f: boolean=false, g:boolean=false, h: boolean=false): boolean {
  return !or(a, b, c, d, e, f, g, h);
}


/**
 * Check if odd number of values are true.
 * @param a 1st boolean
 * @param b 2nd boolean
 * @param c 3rd boolean
 * @param d 4th boolean
 * @param e 5th boolean
 * @param f 6th boolean
 * @param g 7th boolean
 * @param h 8th boolean
 * @returns a ⊕ b ⊕ ...?
 */
export function xor(a: boolean=false, b: boolean=false, c:boolean=false, d: boolean=false,
  e: boolean=false, f: boolean=false, g:boolean=false, h: boolean=false): boolean {
  return a !== b !== c !== d !== e !== f !== g !== h;
}


/**
 * Check if even number of values are true.
 * @param a 1st boolean
 * @param b 2nd boolean
 * @param c 3rd boolean
 * @param d 4th boolean
 * @param e 5th boolean
 * @param f 6th boolean
 * @param g 7th boolean
 * @param h 8th boolean
 * @returns ¬(a ⊕ b ⊕ ...)?
 */
export function xnor(a: boolean=false, b: boolean=false, c:boolean=false, d: boolean=false,
  e: boolean=false, f: boolean=false, g:boolean=false, h: boolean=false): boolean {
  return !xor(a, b, c, d, e, f, g, h);
}




// SPECIAL
// ------

/**
 * Count number of true values.
 * @param a 1st boolean
 * @param b 2nd boolean
 * @param c 3rd boolean
 * @param d 4th boolean
 * @param e 5th boolean
 * @param f 6th boolean
 * @param g 7th boolean
 * @param h 8th boolean
 * @returns a + b + ...
 */
export function count(a: boolean=false, b: boolean=false, c:boolean=false, d: boolean=false,
  e: boolean=false, f: boolean=false, g:boolean=false, h: boolean=false): number {
  return (a? 1 : 0) + (b? 1 : 0) + (c? 1 : 0) + (d? 1 : 0) +
    (e? 1 : 0) + (f? 1 : 0) + (g? 1 : 0) + (h? 1 : 0);
}


/**
 * Check if ith value is true.
 * @param i index
 * @param a 1st boolean
 * @param b 2nd boolean
 * @param c 3rd boolean
 * @param d 4th boolean
 * @param e 5th boolean
 * @param f 6th boolean
 * @param g 7th boolean
 * @param h 8th boolean
 * @returns iᵗʰ boolean
 */
export function select(i: number,
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
