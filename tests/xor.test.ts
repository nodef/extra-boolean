import xor from '../src/xor';


test('0.0', () => {
  var x = xor();
  expect(x).toBe(false);
});
test('1.1', () => {
  var x = xor(true);
  expect(x).toBe(true);
});
test('1.0', () => {
  var x = xor(false);
  expect(x).toBe(false);
});
test('2.2', () => {
  var x = xor(true, false);
  expect(x).toBe(true);
});
test('2.1', () => {
  var x = xor(false, true);
  expect(x).toBe(true);
});
test('2.3', () => {
  var x = xor(true, true);
  expect(x).toBe(false);
});
test('2.0', () => {
  var x = xor(false, false);
  expect(x).toBe(false);
});
test('8.1', () => {
  var x = xor(false, false, false, false, false, false, false, true);
  expect(x).toBe(true);
});
test('8.3', () => {
  var x = xor(false, false, false, false, false, false, true, true);
  expect(x).toBe(false);
});
