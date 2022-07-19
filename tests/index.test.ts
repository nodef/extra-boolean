import * as boolean from "../src";




// 1. Basic tests.
test("example1", () => {
  var a = boolean.parse('1');
  expect(a).toBe(true);
  var a = boolean.parse('not off');
  expect(a).toBe(true);
  var a = boolean.parse('truthy');
  expect(a).toBe(true);
  // → true

  var a = boolean.parse('not true');
  expect(a).toBe(false);
  var a = boolean.parse('inactive');
  expect(a).toBe(false);
  var a = boolean.parse('disabled');
  expect(a).toBe(false);
  // → false

  var a = boolean.imply(true, false);
  expect(a).toBe(false);
  // → false

  var a = boolean.eq(false, false);
  expect(a).toBe(true);
  // → true

  var a = boolean.xor(true, true, true);
  expect(a).toBe(true);
  // → true

  var a = boolean.select(1, true, false, true);
  expect(a).toBe(false);
  // → false                        ^

  var b = boolean.count(true, false, true);
  expect(b).toBe(2);
  // → 2                 ^            ^
});
