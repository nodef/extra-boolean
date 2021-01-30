import or from '../src/or';


test('0.0', () => {
  var x = or();
  expect(x).toBe(false);
});
test('1.1', () => {
  var x = or(true);
  expect(x).toBe(true);
});
test('1.0', () => {
  var x = or(false);
  expect(x).toBe(false);
});
test('2.3', () => {
  var x = or(true, true);
  expect(x).toBe(true);
});
test('2.2', () => {
  var x = or(true, false);
  expect(x).toBe(true);
});
test('2.1', () => {
  var x = or(false, true);
  expect(x).toBe(true);
});
test('2.0', () => {
  var x = or(false, false);
  expect(x).toBe(false);
});
test('8.1', () => {
  var x = or(false, false, false, false, false, false, false, true);
  expect(x).toBe(true);
});
test('8.0', () => {
  var x = or(false, false, false, false, false, false, false, false);
  expect(x).toBe(false);
});
