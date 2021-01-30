import select from '../src/select';


test('0.0', () => {
  var x = select(0);
  expect(x).toBe(false);
});
test('1.0', () => {
  var x = select(0, true);
  expect(x).toBe(true);
});
test('1.1', () => {
  var x = select(1, true);
  expect(x).toBe(false);
});
test('2.0', () => {
  var x = select(0, true, false);
  expect(x).toBe(true);
});
test('2.1', () => {
  var x = select(1, true, false);
  expect(x).toBe(false);
});
test('8.0', () => {
  var x = select(0, true, false, false, false, false, false, false, false);
  expect(x).toBe(true);
});
test('8.7', () => {
  var x = select(7, true, false, false, false, false, false, false, false);
  expect(x).toBe(false);
});
