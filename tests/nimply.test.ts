import nimply from "../src/nimply";


test("2.2", () => {
  var x = nimply(true, false);
  expect(x).toBe(true);
});
test("2.3", () => {
  var x = nimply(true, true);
  expect(x).toBe(false);
});
test("2.1", () => {
  var x = nimply(false, true);
  expect(x).toBe(false);
});
test("2.0", () => {
  var x = nimply(false, false);
  expect(x).toBe(false);
});
