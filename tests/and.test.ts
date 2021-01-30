import and from '../src/and';


test('0.0', () => {
  var x = and();
  expect(x).toBe(true);
});
test('1.1', () => {
  var x = and(true);
  expect(x).toBe(true);
});
test('1.0', () => {
  var x = and(false);
  expect(x).toBe(false);
});
test('2.3', () => {
  var x = and(true, true);
  expect(x).toBe(true);
});
test('2.2', () => {
  var x = and(true, false);
  expect(x).toBe(false);
});
test('2.1', () => {
  var x = and(false, true);
  expect(x).toBe(false);
});
test('2.0', () => {
  var x = and(false, false);
  expect(x).toBe(false);
});
test('8.255', () => {
  var x = and(true, true, true, true, true, true, true, true);
  expect(x).toBe(true);
});
test('8.254', () => {
  var x = and(true, true, true, true, true, true, true, false);
  expect(x).toBe(false);
});
