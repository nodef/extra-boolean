import imp from "../src/imp";


test("2.3", () => {
  var x = imp(true, true);
  expect(x).toBe(true);
});
test("2.1", () => {
  var x = imp(false, true);
  expect(x).toBe(true);
});
test("2.0", () => {
  var x = imp(false, false);
  expect(x).toBe(true);
});
test("2.2", () => {
  var x = imp(true, false);
  expect(x).toBe(false);
});
