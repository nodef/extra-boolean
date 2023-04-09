import {
  is,
  parse,
  not,
  imply,
  nimply,
  eq,
  neq,
  and,
  nand,
  or,
  nor,
  xor,
  xnor,
  count,
  select,
} from "../src";




// 1. Basic tests.
test("example1", () => {
  var a = parse("1");
  expect(a).toBe(true);
  var a = parse("not off");
  expect(a).toBe(true);
  var a = parse("truthy");
  expect(a).toBe(true);
  // → true

  var a = parse("not true");
  expect(a).toBe(false);
  var a = parse("inactive");
  expect(a).toBe(false);
  var a = parse("disabled");
  expect(a).toBe(false);
  // → false

  var a = imply(true, false);
  expect(a).toBe(false);
  // → false

  var a = eq(false, false);
  expect(a).toBe(true);
  // → true

  var a = xor(true, true, true);
  expect(a).toBe(true);
  // → true

  var a = select(1, true, false, true);
  expect(a).toBe(false);
  // → false                        ^

  var b = count(true, false, true);
  expect(b).toBe(2);
  // → 2                 ^            ^
});




// ABOUT
// -----

test("is", () => {
  var a = is(false);
  expect(a).toBe(true);
  var a = is(0);
  expect(a).toBe(false);
});


test("parse", () => {
  var a = parse("1");
  expect(a).toBe(true);
  var a = parse("truthy");
  expect(a).toBe(true);
  var a = parse("not off");
  expect(a).toBe(true);
  var a = parse("enabled");
  expect(a).toBe(true);
  var a = parse("0");
  expect(a).toBe(false);
  var a = parse("not true");
  expect(a).toBe(false);
  var a = parse("inactive");
  expect(a).toBe(false);
  var a = parse("disabled");
  expect(a).toBe(false);
});




// SINGLE
// ------

test("not", () => {
  var a = not(false);
  expect(a).toBe(true);
  var a = not(true);
  expect(a).toBe(false);
});


test("imply", () => {
  var a = imply(true, true);
  expect(a).toBe(true);
  var a = imply(false, true);
  expect(a).toBe(true);
  var a = imply(false, false);
  expect(a).toBe(true);
  var a = imply(true, false);
  expect(a).toBe(false);
});


test("nimply", () => {
  var a = nimply(true, false);
  expect(a).toBe(true);
  var a = nimply(true, true);
  expect(a).toBe(false);
  var a = nimply(false, true);
  expect(a).toBe(false);
  var a = nimply(false, false);
  expect(a).toBe(false);
});


test("eq", () => {
  var a = eq(true, true);
  expect(a).toBe(true);
  var a = eq(false, false);
  expect(a).toBe(true);
  var a = eq(true, false);
  expect(a).toBe(false);
  var a = eq(false, true);
  expect(a).toBe(false);
});


test("neq", () => {
  var a = neq(true, false);
  expect(a).toBe(true);
  var a = neq(false, true);
  expect(a).toBe(true);
  var a = neq(true, true);
  expect(a).toBe(false);
  var a = neq(false, false);
  expect(a).toBe(false);
});




// BASIC
// -----

test("and", () => {
  var a = and();
  expect(a).toBe(true);
  var a = and(true);
  expect(a).toBe(true);
  var a = and(false);
  expect(a).toBe(false);
  var a = and(true, true);
  expect(a).toBe(true);
  var a = and(true, false);
  expect(a).toBe(false);
  var a = and(false, true);
  expect(a).toBe(false);
  var a = and(false, false);
  expect(a).toBe(false);
  var a = and(true, true, true, true, true, true, true, true);
  expect(a).toBe(true);
  var a = and(true, true, true, true, true, true, true, false);
  expect(a).toBe(false);
});


test("nand", () => {
  var a = nand();
  expect(a).toBe(false);
  var a = nand(false);
  expect(a).toBe(true);
  var a = nand(true);
  expect(a).toBe(false);
  var a = nand(true, false);
  expect(a).toBe(true);
  var a = nand(false, true);
  expect(a).toBe(true);
  var a = nand(false, false);
  expect(a).toBe(true);
  var a = nand(true, true);
  expect(a).toBe(false);
  var a = nand(true, true, true, true, true, true, true, false);
  expect(a).toBe(true);
  var a = nand(true, true, true, true, true, true, true, true);
  expect(a).toBe(false);
});


test("or", () => {
  var a = or();
  expect(a).toBe(false);
  var a = or(true);
  expect(a).toBe(true);
  var a = or(false);
  expect(a).toBe(false);
  var a = or(true, true);
  expect(a).toBe(true);
  var a = or(true, false);
  expect(a).toBe(true);
  var a = or(false, true);
  expect(a).toBe(true);
  var a = or(false, false);
  expect(a).toBe(false);
  var a = or(false, false, false, false, false, false, false, true);
  expect(a).toBe(true);
  var a = or(false, false, false, false, false, false, false, false);
  expect(a).toBe(false);
});


test("nor", () => {
  var a = nor();
  expect(a).toBe(true);
  var a = nor(false);
  expect(a).toBe(true);
  var a = nor(true);
  expect(a).toBe(false);
  var a = nor(false, false);
  expect(a).toBe(true);
  var a = nor(true, true);
  expect(a).toBe(false);
  var a = nor(true, false);
  expect(a).toBe(false);
  var a = nor(false, true);
  expect(a).toBe(false);
  var a = nor(false, false, false, false, false, false, false, false);
  expect(a).toBe(true);
  var a = nor(false, false, false, false, false, false, false, true);
  expect(a).toBe(false);
});


test("xor", () => {
  var a = xor();
  expect(a).toBe(false);
  var a = xor(true);
  expect(a).toBe(true);
  var a = xor(false);
  expect(a).toBe(false);
  var a = xor(true, false);
  expect(a).toBe(true);
  var a = xor(false, true);
  expect(a).toBe(true);
  var a = xor(true, true);
  expect(a).toBe(false);
  var a = xor(false, false);
  expect(a).toBe(false);
  var a = xor(false, false, false, false, false, false, false, true);
  expect(a).toBe(true);
  var a = xor(false, false, false, false, false, false, true, true);
  expect(a).toBe(false);
});


test("xnor", () => {
  var a = xnor();
  expect(a).toBe(true);
  var a = xnor(false);
  expect(a).toBe(true);
  var a = xnor(true);
  expect(a).toBe(false);
  var a = xnor(true, true);
  expect(a).toBe(true);
  var a = xnor(false, false);
  expect(a).toBe(true);
  var a = xnor(true, false);
  expect(a).toBe(false);
  var a = xnor(false, true);
  expect(a).toBe(false);
  var a = xnor(false, false, false, false, false, false, false, false);
  expect(a).toBe(true);
  var a = xnor(false, false, false, false, false, true, true, true);
  expect(a).toBe(false);
});




// SPECIAL
// -------

test("count", () => {
  var a = count();
  expect(a).toBe(0);
  var a = count(false);
  expect(a).toBe(0);
  var a = count(true);
  expect(a).toBe(1);
  var a = count(false, false);
  expect(a).toBe(0);
  var a = count(true, false);
  expect(a).toBe(1);
  var a = count(false, true);
  expect(a).toBe(1);
  var a = count(true, true);
  expect(a).toBe(2);
  var a = count(false, false, false, false, false, false, false, false);
  expect(a).toBe(0);
  var a = count(false, false, false, false, false, false, false, true);
  expect(a).toBe(1);
  var a = count(false, false, false, false, false, true, false, true);
  expect(a).toBe(2);
  var a = count(false, true, false, false, false, false, true, true);
  expect(a).toBe(3);
  var a = count(false, true, false, false, false, true, true, true);
  expect(a).toBe(4);
  var a = count(true, false, false, true, false, true, true, true);
  expect(a).toBe(5);
  var a = count(true, true, true, false, false, true, true, true);
  expect(a).toBe(6);
  var a = count(true, false, true, true, true, true, true, true);
  expect(a).toBe(7);
  var a = count(true, true, true, true, true, true, true, true);
  expect(a).toBe(8);
});


test("select", () => {
  var a = select(0);
  expect(a).toBe(false);
  var a = select(8);
  expect(a).toBe(false);
  var a = select(0, true);
  expect(a).toBe(true);
  var a = select(1, true);
  expect(a).toBe(false);
  var a = select(2, true, false, true, false);
  expect(a).toBe(true);
  var a = select(3, true, false, true, false);
  expect(a).toBe(false);
  var a = select(4, true, false, false, false, true, false, false, false);
  expect(a).toBe(true);
  var a = select(5, true, false, false, false, true, false, false, false);
  expect(a).toBe(false);
  var a = select(6, true, false, false, false, true, false, false, false);
  expect(a).toBe(false);
  var a = select(7, true, false, false, false, true, false, false, false);
  expect(a).toBe(false);
});
