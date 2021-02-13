import neq from "../src/neq";


test("2.2", () => {
  var x = neq(true, false);
  expect(x).toBe(true);
});
test("2.1", () => {
  var x = neq(false, true);
  expect(x).toBe(true);
});
test("2.3", () => {
  var x = neq(true, true);
  expect(x).toBe(false);
});
test("2.0", () => {
  var x = neq(false, false);
  expect(x).toBe(false);
});
