import nor from "../src/nor";


test("0.0", () => {
  var x = nor();
  expect(x).toBe(true);
});
test("1.0", () => {
  var x = nor(false);
  expect(x).toBe(true);
});
test("1.1", () => {
  var x = nor(true);
  expect(x).toBe(false);
});
test("2.0", () => {
  var x = nor(false, false);
  expect(x).toBe(true);
});
test("2.3", () => {
  var x = nor(true, true);
  expect(x).toBe(false);
});
test("2.2", () => {
  var x = nor(true, false);
  expect(x).toBe(false);
});
test("2.1", () => {
  var x = nor(false, true);
  expect(x).toBe(false);
});
test("8.0", () => {
  var x = nor(false, false, false, false, false, false, false, false);
  expect(x).toBe(true);
});
test("8.1", () => {
  var x = nor(false, false, false, false, false, false, false, true);
  expect(x).toBe(false);
});
