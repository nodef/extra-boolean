import count from "../src/count";


test("0.0", () => {
  var x = count();
  expect(x).toBe(0);
});
test("1.0", () => {
  var x = count(false);
  expect(x).toBe(0);
});
test("1.1", () => {
  var x = count(true);
  expect(x).toBe(1);
});
test("2.0", () => {
  var x = count(false, false);
  expect(x).toBe(0);
});
test("2.1", () => {
  var x = count(true, false);
  expect(x).toBe(1);
  var x = count(false, true);
  expect(x).toBe(1);
});
test("2.2", () => {
  var x = count(true, true);
  expect(x).toBe(2);
});
test("8.0", () => {
  var x = count(false, false, false, false, false, false, false, false);
  expect(x).toBe(0);
});
test("8.1", () => {
  var x = count(false, false, false, false, false, false, false, true);
  expect(x).toBe(1);
});
test("8.2", () => {
  var x = count(false, false, false, false, false, true, false, true);
  expect(x).toBe(2);
});
test("8.3", () => {
  var x = count(false, true, false, false, false, false, true, true);
  expect(x).toBe(3);
});
test("8.4", () => {
  var x = count(false, true, false, false, false, true, true, true);
  expect(x).toBe(4);
});
test("8.5", () => {
  var x = count(true, false, false, true, false, true, true, true);
  expect(x).toBe(5);
});
test("8.6", () => {
  var x = count(true, true, true, false, false, true, true, true);
  expect(x).toBe(6);
});
test("8.7", () => {
  var x = count(true, false, true, true, true, true, true, true);
  expect(x).toBe(7);
});
test("8.8", () => {
  var x = count(true, true, true, true, true, true, true, true);
  expect(x).toBe(8);
});
