import {assertEquals} from "@std/assert";
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
} from "./index.ts";




// 1. Basic tests.
Deno.test("example1", () => {
  let a;
  a = parse("1");
  assertEquals(a, true);
  a = parse("not off");
  assertEquals(a, true);
  a = parse("truthy");
  assertEquals(a, true);
  // → true

  a = parse("not true");
  assertEquals(a, false);
  a = parse("inactive");
  assertEquals(a, false);
  a = parse("disabled");
  assertEquals(a, false);
  // → false

  a = imply(true, false);
  assertEquals(a, false);
  // → false

  a = eq(false, false);
  assertEquals(a, true);
  // → true

  a = xor(true, true, true);
  assertEquals(a, true);
  // → true

  a = select(1, true, false, true);
  assertEquals(a, false);
  // → false                        ^

  const b = count(true, false, true);
  assertEquals(b, 2);
  // → 2                 ^            ^
});




// ABOUT
// -----

Deno.test("is", () => {
  let a;
  a = is(false);
  assertEquals(a, true);
  a = is(0);
  assertEquals(a, false);
});


Deno.test("parse", () => {
  let a;
  a = parse("1");
  assertEquals(a, true);
  a = parse("truthy");
  assertEquals(a, true);
  a = parse("not off");
  assertEquals(a, true);
  a = parse("enabled");
  assertEquals(a, true);
  a = parse("0");
  assertEquals(a, false);
  a = parse("not true");
  assertEquals(a, false);
  a = parse("inactive");
  assertEquals(a, false);
  a = parse("disabled");
  assertEquals(a, false);
});




// SINGLE
// ------

Deno.test("not", () => {
  let a;
  a = not(false);
  assertEquals(a, true);
  a = not(true);
  assertEquals(a, false);
});


Deno.test("imply", () => {
  let a;
  a = imply(true, true);
  assertEquals(a, true);
  a = imply(false, true);
  assertEquals(a, true);
  a = imply(false, false);
  assertEquals(a, true);
  a = imply(true, false);
  assertEquals(a, false);
});


Deno.test("nimply", () => {
  let a;
  a = nimply(true, false);
  assertEquals(a, true);
  a = nimply(true, true);
  assertEquals(a, false);
  a = nimply(false, true);
  assertEquals(a, false);
  a = nimply(false, false);
  assertEquals(a, false);
});


Deno.test("eq", () => {
  let a;
  a = eq(true, true);
  assertEquals(a, true);
  a = eq(false, false);
  assertEquals(a, true);
  a = eq(true, false);
  assertEquals(a, false);
  a = eq(false, true);
  assertEquals(a, false);
});


Deno.test("neq", () => {
  let a;
  a = neq(true, false);
  assertEquals(a, true);
  a = neq(false, true);
  assertEquals(a, true);
  a = neq(true, true);
  assertEquals(a, false);
  a = neq(false, false);
  assertEquals(a, false);
});




// BASIC
// -----

Deno.test("and", () => {
  let a;
  a = and();
  assertEquals(a, true);
  a = and(true);
  assertEquals(a, true);
  a = and(false);
  assertEquals(a, false);
  a = and(true, true);
  assertEquals(a, true);
  a = and(true, false);
  assertEquals(a, false);
  a = and(false, true);
  assertEquals(a, false);
  a = and(false, false);
  assertEquals(a, false);
  a = and(true, true, true, true, true, true, true, true);
  assertEquals(a, true);
  a = and(true, true, true, true, true, true, true, false);
  assertEquals(a, false);
});


Deno.test("nand", () => {
  let a;
  a = nand();
  assertEquals(a, false);
  a = nand(false);
  assertEquals(a, true);
  a = nand(true);
  assertEquals(a, false);
  a = nand(true, false);
  assertEquals(a, true);
  a = nand(false, true);
  assertEquals(a, true);
  a = nand(false, false);
  assertEquals(a, true);
  a = nand(true, true);
  assertEquals(a, false);
  a = nand(true, true, true, true, true, true, true, false);
  assertEquals(a, true);
  a = nand(true, true, true, true, true, true, true, true);
  assertEquals(a, false);
});


Deno.test("or", () => {
  let a;
  a = or();
  assertEquals(a, false);
  a = or(true);
  assertEquals(a, true);
  a = or(false);
  assertEquals(a, false);
  a = or(true, true);
  assertEquals(a, true);
  a = or(true, false);
  assertEquals(a, true);
  a = or(false, true);
  assertEquals(a, true);
  a = or(false, false);
  assertEquals(a, false);
  a = or(false, false, false, false, false, false, false, true);
  assertEquals(a, true);
  a = or(false, false, false, false, false, false, false, false);
  assertEquals(a, false);
});


Deno.test("nor", () => {
  let a;
  a = nor();
  assertEquals(a, true);
  a = nor(false);
  assertEquals(a, true);
  a = nor(true);
  assertEquals(a, false);
  a = nor(false, false);
  assertEquals(a, true);
  a = nor(true, true);
  assertEquals(a, false);
  a = nor(true, false);
  assertEquals(a, false);
  a = nor(false, true);
  assertEquals(a, false);
  a = nor(false, false, false, false, false, false, false, false);
  assertEquals(a, true);
  a = nor(false, false, false, false, false, false, false, true);
  assertEquals(a, false);
});


Deno.test("xor", () => {
  let a;
  a = xor();
  assertEquals(a, false);
  a = xor(true);
  assertEquals(a, true);
  a = xor(false);
  assertEquals(a, false);
  a = xor(true, false);
  assertEquals(a, true);
  a = xor(false, true);
  assertEquals(a, true);
  a = xor(true, true);
  assertEquals(a, false);
  a = xor(false, false);
  assertEquals(a, false);
  a = xor(false, false, false, false, false, false, false, true);
  assertEquals(a, true);
  a = xor(false, false, false, false, false, false, true, true);
  assertEquals(a, false);
});


Deno.test("xnor", () => {
  let a;
  a = xnor();
  assertEquals(a, true);
  a = xnor(false);
  assertEquals(a, true);
  a = xnor(true);
  assertEquals(a, false);
  a = xnor(true, true);
  assertEquals(a, true);
  a = xnor(false, false);
  assertEquals(a, true);
  a = xnor(true, false);
  assertEquals(a, false);
  a = xnor(false, true);
  assertEquals(a, false);
  a = xnor(false, false, false, false, false, false, false, false);
  assertEquals(a, true);
  a = xnor(false, false, false, false, false, true, true, true);
  assertEquals(a, false);
});




// SPECIAL
// -------

Deno.test("count", () => {
  let a;
  a = count();
  assertEquals(a, 0);
  a = count(false);
  assertEquals(a, 0);
  a = count(true);
  assertEquals(a, 1);
  a = count(false, false);
  assertEquals(a, 0);
  a = count(true, false);
  assertEquals(a, 1);
  a = count(false, true);
  assertEquals(a, 1);
  a = count(true, true);
  assertEquals(a, 2);
  a = count(false, false, false, false, false, false, false, false);
  assertEquals(a, 0);
  a = count(false, false, false, false, false, false, false, true);
  assertEquals(a, 1);
  a = count(false, false, false, false, false, true, false, true);
  assertEquals(a, 2);
  a = count(false, true, false, false, false, false, true, true);
  assertEquals(a, 3);
  a = count(false, true, false, false, false, true, true, true);
  assertEquals(a, 4);
  a = count(true, false, false, true, false, true, true, true);
  assertEquals(a, 5);
  a = count(true, true, true, false, false, true, true, true);
  assertEquals(a, 6);
  a = count(true, false, true, true, true, true, true, true);
  assertEquals(a, 7);
  a = count(true, true, true, true, true, true, true, true);
  assertEquals(a, 8);
});


Deno.test("select", () => {
  let a;
  a = select(0);
  assertEquals(a, false);
  a = select(8);
  assertEquals(a, false);
  a = select(0, true);
  assertEquals(a, true);
  a = select(1, true);
  assertEquals(a, false);
  a = select(2, true, false, true, false);
  assertEquals(a, true);
  a = select(3, true, false, true, false);
  assertEquals(a, false);
  a = select(4, true, false, false, false, true, false, false, false);
  assertEquals(a, true);
  a = select(5, true, false, false, false, true, false, false, false);
  assertEquals(a, false);
  a = select(6, true, false, false, false, true, false, false, false);
  assertEquals(a, false);
  a = select(7, true, false, false, false, true, false, false, false);
  assertEquals(a, false);
});
