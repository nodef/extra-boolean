declare module 'extra-boolean' {
  /**
   * Checks if value is boolean.
   * @param {*} x a value
   * @returns {boolean} true if boolean
   */
  export function is(x: any): boolean;

  /**
   * Reads a text, and converts it to a boolean value.
   * @param {string} x text to read
   * @returns {boolean} true if text => true
   */
  export function parse(x: string): boolean;

  /**
   * Gets exclusive-or of 2 boolean values.
   * @param {boolean} x first
   * @param {boolean} y second
   */
  export function xor(x: boolean, y: boolean): boolean;

  /**
   * Checks if antecedent => consequent (x => y).
   * @param {boolean} x antecedent
   * @param {boolean} y consequent
   */
  export function imp(x: boolean, y: boolean): boolean;

  /**
   * Checks if antecedent <=> consequent (x <=> y).
   * @param {boolean} x antecedent
   * @param {boolean} y consequent
   */
  export function eqv(x: boolean, y: boolean): boolean;
}