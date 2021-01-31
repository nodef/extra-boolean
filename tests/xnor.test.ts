import xnor from "../src/xnor";


test("0.0", () => {
  var x = xnor();
  expect(x).toBe(true);
});
test("1.0", () => {
  var x = xnor(false);
  expect(x).toBe(true);
});
test("1.1", () => {
  var x = xnor(true);
  expect(x).toBe(false);
});
test("2.3", () => {
  var x = xnor(true, true);
  expect(x).toBe(true);
});
test("2.0", () => {
  var x = xnor(false, false);
  expect(x).toBe(true);
});
test("2.2", () => {
  var x = xnor(true, false);
  expect(x).toBe(false);
});
test("2.1", () => {
  var x = xnor(false, true);
  expect(x).toBe(false);
});
test("8.0", () => {
  var x = xnor(false, false, false, false, false, false, false, false);
  expect(x).toBe(true);
});
test("8.7", () => {
  var x = xnor(false, false, false, false, false, true, true, true);
  expect(x).toBe(false);
});
