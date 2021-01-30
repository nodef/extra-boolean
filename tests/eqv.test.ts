import eqv from '../src/eqv';


test('2.3', () => {
  var x = eqv(true, true);
  expect(x).toBe(true);
});
test('2.0', () => {
  var x = eqv(false, false);
  expect(x).toBe(true);
});
test('2.2', () => {
  var x = eqv(true, false);
  expect(x).toBe(false);
});
test('2.1', () => {
  var x = eqv(false, true);
  expect(x).toBe(false);
});
