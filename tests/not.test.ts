import not from '../src/not';


test('1.0', () => {
  var x = not(false);
  expect(x).toBe(true);
});
test('1.1', () => {
  var x = not(true);
  expect(x).toBe(false);
});
