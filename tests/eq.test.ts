import eq from '../src/eq';


test('2.3', () => {
  var x = eq(true, true);
  expect(x).toBe(true);
});
test('2.0', () => {
  var x = eq(false, false);
  expect(x).toBe(true);
});
test('2.2', () => {
  var x = eq(true, false);
  expect(x).toBe(false);
});
test('2.1', () => {
  var x = eq(false, true);
  expect(x).toBe(false);
});
