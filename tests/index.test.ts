import * as boolean from "../src";




// 1. Basic tests.
test("example1", () => {
  var a = boolean.parse("1");
  expect(a).toBe(true);
  var a = boolean.parse("not off");
  expect(a).toBe(true);
  var a = boolean.parse("truthy");
  expect(a).toBe(true);
  // → true

  var a = boolean.parse("not true");
  expect(a).toBe(false);
  var a = boolean.parse("inactive");
  expect(a).toBe(false);
  var a = boolean.parse("disabled");
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




test("is", () => {
  var a = boolean.is(false);
  expect(a).toBe(true);
  var a = boolean.is(0);
  expect(a).toBe(false);
});


test("parse", () => {
  var a = boolean.parse("1");
  expect(a).toBe(true);
  var a = boolean.parse("truthy");
  expect(a).toBe(true);
  var a = boolean.parse("not off");
  expect(a).toBe(true);
  var a = boolean.parse("enabled");
  expect(a).toBe(true);
  var a = boolean.parse("0");
  expect(a).toBe(false);
  var a = boolean.parse("not true");
  expect(a).toBe(false);
  var a = boolean.parse("inactive");
  expect(a).toBe(false);
  var a = boolean.parse("disabled");
  expect(a).toBe(false);
});


test("not", () => {
  var a = boolean.not(false);
  expect(a).toBe(true);
  var a = boolean.not(true);
  expect(a).toBe(false);
});


test("imply", () => {
  var a = boolean.imply(true, true);
  expect(a).toBe(true);
  var a = boolean.imply(false, true);
  expect(a).toBe(true);
  var a = boolean.imply(false, false);
  expect(a).toBe(true);
  var a = boolean.imply(true, false);
  expect(a).toBe(false);
});


test("nimply", () => {
  var a = boolean.nimply(true, false);
  expect(a).toBe(true);
  var a = boolean.nimply(true, true);
  expect(a).toBe(false);
  var a = boolean.nimply(false, true);
  expect(a).toBe(false);
  var a = boolean.nimply(false, false);
  expect(a).toBe(false);
});


test("eq", () => {
  var a = boolean.eq(true, true);
  expect(a).toBe(true);
  var a = boolean.eq(false, false);
  expect(a).toBe(true);
  var a = boolean.eq(true, false);
  expect(a).toBe(false);
  var a = boolean.eq(false, true);
  expect(a).toBe(false);
});


test("neq", () => {
  var a = boolean.neq(true, false);
  expect(a).toBe(true);
  var a = boolean.neq(false, true);
  expect(a).toBe(true);
  var a = boolean.neq(true, true);
  expect(a).toBe(false);
  var a = boolean.neq(false, false);
  expect(a).toBe(false);
});


test("and", () => {
  var a = boolean.and();
  expect(a).toBe(true);
  var a = boolean.and(true);
  expect(a).toBe(true);
  var a = boolean.and(false);
  expect(a).toBe(false);
  var a = boolean.and(true, true);
  expect(a).toBe(true);
  var a = boolean.and(true, false);
  expect(a).toBe(false);
  var a = boolean.and(false, true);
  expect(a).toBe(false);
  var a = boolean.and(false, false);
  expect(a).toBe(false);
  var a = boolean.and(true, true, true, true, true, true, true, true);
  expect(a).toBe(true);
  var a = boolean.and(true, true, true, true, true, true, true, false);
  expect(a).toBe(false);
});


test("nand", () => {
  var a = boolean.nand();
  expect(a).toBe(false);
  var a = boolean.nand(false);
  expect(a).toBe(true);
  var a = boolean.nand(true);
  expect(a).toBe(false);
  var a = boolean.nand(true, false);
  expect(a).toBe(true);
  var a = boolean.nand(false, true);
  expect(a).toBe(true);
  var a = boolean.nand(false, false);
  expect(a).toBe(true);
  var a = boolean.nand(true, true);
  expect(a).toBe(false);
  var a = boolean.nand(true, true, true, true, true, true, true, false);
  expect(a).toBe(true);
  var a = boolean.nand(true, true, true, true, true, true, true, true);
  expect(a).toBe(false);
});


test("or", () => {
  var a = boolean.or();
  expect(a).toBe(false);
  var a = boolean.or(true);
  expect(a).toBe(true);
  var a = boolean.or(false);
  expect(a).toBe(false);
  var a = boolean.or(true, true);
  expect(a).toBe(true);
  var a = boolean.or(true, false);
  expect(a).toBe(true);
  var a = boolean.or(false, true);
  expect(a).toBe(true);
  var a = boolean.or(false, false);
  expect(a).toBe(false);
  var a = boolean.or(false, false, false, false, false, false, false, true);
  expect(a).toBe(true);
  var a = boolean.or(false, false, false, false, false, false, false, false);
  expect(a).toBe(false);
});


test("nor", () => {
  var a = boolean.nor();
  expect(a).toBe(true);
  var a = boolean.nor(false);
  expect(a).toBe(true);
  var a = boolean.nor(true);
  expect(a).toBe(false);
  var a = boolean.nor(false, false);
  expect(a).toBe(true);
  var a = boolean.nor(true, true);
  expect(a).toBe(false);
  var a = boolean.nor(true, false);
  expect(a).toBe(false);
  var a = boolean.nor(false, true);
  expect(a).toBe(false);
  var a = boolean.nor(false, false, false, false, false, false, false, false);
  expect(a).toBe(true);
  var a = boolean.nor(false, false, false, false, false, false, false, true);
  expect(a).toBe(false);
});


test("xor", () => {
  var a = boolean.xor();
  expect(a).toBe(false);
  var a = boolean.xor(true);
  expect(a).toBe(true);
  var a = boolean.xor(false);
  expect(a).toBe(false);
  var a = boolean.xor(true, false);
  expect(a).toBe(true);
  var a = boolean.xor(false, true);
  expect(a).toBe(true);
  var a = boolean.xor(true, true);
  expect(a).toBe(false);
  var a = boolean.xor(false, false);
  expect(a).toBe(false);
  var a = boolean.xor(false, false, false, false, false, false, false, true);
  expect(a).toBe(true);
  var a = boolean.xor(false, false, false, false, false, false, true, true);
  expect(a).toBe(false);
});


test("xnor", () => {
  var a = boolean.xnor();
  expect(a).toBe(true);
  var a = boolean.xnor(false);
  expect(a).toBe(true);
  var a = boolean.xnor(true);
  expect(a).toBe(false);
  var a = boolean.xnor(true, true);
  expect(a).toBe(true);
  var a = boolean.xnor(false, false);
  expect(a).toBe(true);
  var a = boolean.xnor(true, false);
  expect(a).toBe(false);
  var a = boolean.xnor(false, true);
  expect(a).toBe(false);
  var a = boolean.xnor(false, false, false, false, false, false, false, false);
  expect(a).toBe(true);
  var a = boolean.xnor(false, false, false, false, false, true, true, true);
  expect(a).toBe(false);
});


test("count", () => {
  var a = boolean.count();
  expect(a).toBe(0);
  var a = boolean.count(false);
  expect(a).toBe(0);
  var a = boolean.count(true);
  expect(a).toBe(1);
  var a = boolean.count(false, false);
  expect(a).toBe(0);
  var a = boolean.count(true, false);
  expect(a).toBe(1);
  var a = boolean.count(false, true);
  expect(a).toBe(1);
  var a = boolean.count(true, true);
  expect(a).toBe(2);
  var a = boolean.count(false, false, false, false, false, false, false, false);
  expect(a).toBe(0);
  var a = boolean.count(false, false, false, false, false, false, false, true);
  expect(a).toBe(1);
  var a = boolean.count(false, false, false, false, false, true, false, true);
  expect(a).toBe(2);
  var a = boolean.count(false, true, false, false, false, false, true, true);
  expect(a).toBe(3);
  var a = boolean.count(false, true, false, false, false, true, true, true);
  expect(a).toBe(4);
  var a = boolean.count(true, false, false, true, false, true, true, true);
  expect(a).toBe(5);
  var a = boolean.count(true, true, true, false, false, true, true, true);
  expect(a).toBe(6);
  var a = boolean.count(true, false, true, true, true, true, true, true);
  expect(a).toBe(7);
  var a = boolean.count(true, true, true, true, true, true, true, true);
  expect(a).toBe(8);
});


test("select", () => {
  var a = boolean.select(0);
  expect(a).toBe(false);
  var a = boolean.select(8);
  expect(a).toBe(false);
  var a = boolean.select(0, true);
  expect(a).toBe(true);
  var a = boolean.select(1, true);
  expect(a).toBe(false);
  var a = boolean.select(2, true, false, true, false);
  expect(a).toBe(true);
  var a = boolean.select(3, true, false, true, false);
  expect(a).toBe(false);
  var a = boolean.select(4, true, false, false, false, true, false, false, false);
  expect(a).toBe(true);
  var a = boolean.select(5, true, false, false, false, true, false, false, false);
  expect(a).toBe(false);
  var a = boolean.select(6, true, false, false, false, true, false, false, false);
  expect(a).toBe(false);
  var a = boolean.select(7, true, false, false, false, true, false, false, false);
  expect(a).toBe(false);
});
