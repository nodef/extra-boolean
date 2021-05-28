import select from "../src/select";


test("0.0", () => {
  var x = select(0);
  expect(x).toBe(false);
});
test("0.8", () => {
  var x = select(8);
  expect(x).toBe(false);
});
test("1.0", () => {
  var x = select(0, true);
  expect(x).toBe(true);
});
test("1.1", () => {
  var x = select(1, true);
  expect(x).toBe(false);
});
test("4.2", () => {
  var x = select(2, true, false, true, false);
  expect(x).toBe(true);
});
test("4.3", () => {
  var x = select(3, true, false, true, false);
  expect(x).toBe(false);
});
test("8.4", () => {
  var x = select(4, true, false, false, false, true, false, false, false);
  expect(x).toBe(true);
});
test("8.5", () => {
  var x = select(5, true, false, false, false, true, false, false, false);
  expect(x).toBe(false);
});
test("8.6", () => {
  var x = select(6, true, false, false, false, true, false, false, false);
  expect(x).toBe(false);
});
test("8.7", () => {
  var x = select(7, true, false, false, false, true, false, false, false);
  expect(x).toBe(false);
});
