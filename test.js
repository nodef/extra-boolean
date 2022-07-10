const boolean = require('./');
const assert = require('assert');


// 1. Basic tests.
function example1() {
  var a = boolean.parse('1');
  assert.equal(a, true);
  var a = boolean.parse('not off');
  assert.equal(a, true);
  var a = boolean.parse('truthy');
  assert.equal(a, true);
  // → true

  var a = boolean.parse('not true');
  assert.equal(a, false);
  var a = boolean.parse('inactive');
  assert.equal(a, false);
  var a = boolean.parse('disabled');
  assert.equal(a, false);
  // → false

  var a = boolean.imply(true, false);
  assert.equal(a, false);
  // → false

  var a = boolean.eq(false, false);
  assert.equal(a, true);
  // → true

  var a = boolean.xor(true, true, true);
  assert.equal(a, true);
  // → true

  var a = boolean.select(1, true, false, true);
  assert.equal(a, false);
  // → false                        ^

  var a = boolean.count(true, false, true);
  assert.equal(a, 2);
  // → 2                 ^            ^
}
example1();




function testParse() {
  var a = boolean.parse("1");
  assert.equal(a, true);
  var a = boolean.parse("truthy");
  assert.equal(a, true);
  var a = boolean.parse("not off");
  assert.equal(a, true);
  var a = boolean.parse("enabled");
  assert.equal(a, true);
  var a = boolean.parse("0");
  assert.equal(a, false);
  var a = boolean.parse("not true");
  assert.equal(a, false);
  var a = boolean.parse("inactive");
  assert.equal(a, false);
  var a = boolean.parse("disabled");
  assert.equal(a, false);
}
testParse();


function testNot() {
  var a = boolean.not(false);
  assert.equal(a, true);
  var a = boolean.not(true);
  assert.equal(a, false);
}
testNot();


function testImply() {
  var a = boolean.imply(true, true);
  assert.equal(a, true);
  var a = boolean.imply(false, true);
  assert.equal(a, true);
  var a = boolean.imply(false, false);
  assert.equal(a, true);
  var a = boolean.imply(true, false);
  assert.equal(a, false);
}
testImply();


function testNimply() {
  var a = boolean.nimply(true, false);
  assert.equal(a, true);
  var a = boolean.nimply(true, true);
  assert.equal(a, false);
  var a = boolean.nimply(false, true);
  assert.equal(a, false);
  var a = boolean.nimply(false, false);
  assert.equal(a, false);
}
testNimply();


function testEq() {
  var a = boolean.eq(true, true);
  assert.equal(a, true);
  var a = boolean.eq(false, false);
  assert.equal(a, true);
  var a = boolean.eq(true, false);
  assert.equal(a, false);
  var a = boolean.eq(false, true);
  assert.equal(a, false);
}
testEq();


function testNeq() {
  var a = boolean.neq(true, false);
  assert.equal(a, true);
  var a = boolean.neq(false, true);
  assert.equal(a, true);
  var a = boolean.neq(true, true);
  assert.equal(a, false);
  var a = boolean.neq(false, false);
  assert.equal(a, false);
}
testNeq();


function testAnd() {
  var a = boolean.and();
  assert.equal(a, true);
  var a = boolean.and(true);
  assert.equal(a, true);
  var a = boolean.and(false);
  assert.equal(a, false);
  var a = boolean.and(true, true);
  assert.equal(a, true);
  var a = boolean.and(true, false);
  assert.equal(a, false);
  var a = boolean.and(false, true);
  assert.equal(a, false);
  var a = boolean.and(false, false);
  assert.equal(a, false);
  var a = boolean.and(true, true, true, true, true, true, true, true);
  assert.equal(a, true);
  var a = boolean.and(true, true, true, true, true, true, true, false);
  assert.equal(a, false);
}
testAnd();


function testNand() {
  var a = boolean.nand();
  assert.equal(a, false);
  var a = boolean.nand(false);
  assert.equal(a, true);
  var a = boolean.nand(true);
  assert.equal(a, false);
  var a = boolean.nand(true, false);
  assert.equal(a, true);
  var a = boolean.nand(false, true);
  assert.equal(a, true);
  var a = boolean.nand(false, false);
  assert.equal(a, true);
  var a = boolean.nand(true, true);
  assert.equal(a, false);
  var a = boolean.nand(true, true, true, true, true, true, true, false);
  assert.equal(a, true);
  var a = boolean.nand(true, true, true, true, true, true, true, true);
  assert.equal(a, false);
}
testNand();


function testOr() {
  var a = boolean.or();
  assert.equal(a, false);
  var a = boolean.or(true);
  assert.equal(a, true);
  var a = boolean.or(false);
  assert.equal(a, false);
  var a = boolean.or(true, true);
  assert.equal(a, true);
  var a = boolean.or(true, false);
  assert.equal(a, true);
  var a = boolean.or(false, true);
  assert.equal(a, true);
  var a = boolean.or(false, false);
  assert.equal(a, false);
  var a = boolean.or(false, false, false, false, false, false, false, true);
  assert.equal(a, true);
  var a = boolean.or(false, false, false, false, false, false, false, false);
  assert.equal(a, false);
}
testOr();


function testNor() {
  var a = boolean.nor();
  assert.equal(a, true);
  var a = boolean.nor(false);
  assert.equal(a, true);
  var a = boolean.nor(true);
  assert.equal(a, false);
  var a = boolean.nor(false, false);
  assert.equal(a, true);
  var a = boolean.nor(true, true);
  assert.equal(a, false);
  var a = boolean.nor(true, false);
  assert.equal(a, false);
  var a = boolean.nor(false, true);
  assert.equal(a, false);
  var a = boolean.nor(false, false, false, false, false, false, false, false);
  assert.equal(a, true);
  var a = boolean.nor(false, false, false, false, false, false, false, true);
  assert.equal(a, false);
}
testNor();


function testXor() {
  var a = boolean.xor();
  assert.equal(a, false);
  var a = boolean.xor(true);
  assert.equal(a, true);
  var a = boolean.xor(false);
  assert.equal(a, false);
  var a = boolean.xor(true, false);
  assert.equal(a, true);
  var a = boolean.xor(false, true);
  assert.equal(a, true);
  var a = boolean.xor(true, true);
  assert.equal(a, false);
  var a = boolean.xor(false, false);
  assert.equal(a, false);
  var a = boolean.xor(false, false, false, false, false, false, false, true);
  assert.equal(a, true);
  var a = boolean.xor(false, false, false, false, false, false, true, true);
  assert.equal(a, false);
}
testXor();


function testXnor() {
  var a = boolean.xnor();
  assert.equal(a, true);
  var a = boolean.xnor(false);
  assert.equal(a, true);
  var a = boolean.xnor(true);
  assert.equal(a, false);
  var a = boolean.xnor(true, true);
  assert.equal(a, true);
  var a = boolean.xnor(false, false);
  assert.equal(a, true);
  var a = boolean.xnor(true, false);
  assert.equal(a, false);
  var a = boolean.xnor(false, true);
  assert.equal(a, false);
  var a = boolean.xnor(false, false, false, false, false, false, false, false);
  assert.equal(a, true);
  var a = boolean.xnor(false, false, false, false, false, true, true, true);
  assert.equal(a, false);
}
testXnor();


function testCount() {
  var a = boolean.count();
  assert.equal(a, 0);
  var a = boolean.count(false);
  assert.equal(a, 0);
  var a = boolean.count(true);
  assert.equal(a, 1);
  var a = boolean.count(false, false);
  assert.equal(a, 0);
  var a = boolean.count(true, false);
  assert.equal(a, 1);
  var a = boolean.count(false, true);
  assert.equal(a, 1);
  var a = boolean.count(true, true);
  assert.equal(a, 2);
  var a = boolean.count(false, false, false, false, false, false, false, false);
  assert.equal(a, 0);
  var a = boolean.count(false, false, false, false, false, false, false, true);
  assert.equal(a, 1);
  var a = boolean.count(false, false, false, false, false, true, false, true);
  assert.equal(a, 2);
  var a = boolean.count(false, true, false, false, false, false, true, true);
  assert.equal(a, 3);
  var a = boolean.count(false, true, false, false, false, true, true, true);
  assert.equal(a, 4);
  var a = boolean.count(true, false, false, true, false, true, true, true);
  assert.equal(a, 5);
  var a = boolean.count(true, true, true, false, false, true, true, true);
  assert.equal(a, 6);
  var a = boolean.count(true, false, true, true, true, true, true, true);
  assert.equal(a, 7);
  var a = boolean.count(true, true, true, true, true, true, true, true);
  assert.equal(a, 8);
}
testCount();


function testSelect() {
  var a = boolean.select(0);
  assert.equal(a, false);
  var a = boolean.select(8);
  assert.equal(a, false);
  var a = boolean.select(0, true);
  assert.equal(a, true);
  var a = boolean.select(1, true);
  assert.equal(a, false);
  var a = boolean.select(2, true, false, true, false);
  assert.equal(a, true);
  var a = boolean.select(3, true, false, true, false);
  assert.equal(a, false);
  var a = boolean.select(4, true, false, false, false, true, false, false, false);
  assert.equal(a, true);
  var a = boolean.select(5, true, false, false, false, true, false, false, false);
  assert.equal(a, false);
  var a = boolean.select(6, true, false, false, false, true, false, false, false);
  assert.equal(a, false);
  var a = boolean.select(7, true, false, false, false, true, false, false, false);
  assert.equal(a, false);
}
testSelect();
