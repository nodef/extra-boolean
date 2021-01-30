import imply from '../src/imply';


test('2.3', () => {
  var x = imply(true, true);
  expect(x).toBe(true);
});
test('2.1', () => {
  var x = imply(false, true);
  expect(x).toBe(true);
});
test('2.0', () => {
  var x = imply(false, false);
  expect(x).toBe(true);
});
test('2.2', () => {
  var x = imply(true, false);
  expect(x).toBe(false);
});
