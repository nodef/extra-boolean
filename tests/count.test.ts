import count from "../src/count";


test("0.0", () => {
  var x = count();
  expect(x).toBe(0);
});
test("1.1", () => {
  var x = count(true);
  expect(x).toBe(1);
});
test("1.0", () => {
  var x = count(false);
  expect(x).toBe(0);
});
test("2.3", () => {
  var x = count(true, true);
  expect(x).toBe(2);
});
test("2.2", () => {
  var x = count(true, false);
  expect(x).toBe(1);
});
test("2.1", () => {
  var x = count(false, true);
  expect(x).toBe(1);
});
test("2.0", () => {
  var x = count(false, false);
  expect(x).toBe(0);
});
test("8.1", () => {
  var x = count(false, false, false, false, false, false, false, true);
  expect(x).toBe(1);
});
test("8.7", () => {
  var x = count(false, false, false, false, false, true, true, true);
  expect(x).toBe(3);
});
