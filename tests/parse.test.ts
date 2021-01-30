import parse from '../src/parse';


test('1.t0', () => {
  var x = parse('1');
  expect(x).toBe(true);
});
test('1.t1', () => {
  var x = parse('truthy');
  expect(x).toBe(true);
});
test('1.t2', () => {
  var x = parse('not off');
  expect(x).toBe(true);
});
test('1.t3', () => {
  var x = parse('enabled');
  expect(x).toBe(true);
});
test('1.f0', () => {
  var x = parse('0');
  expect(x).toBe(false);
});
test('1.f1', () => {
  var x = parse('not true');
  expect(x).toBe(false);
});
test('1.f2', () => {
  var x = parse('inactive');
  expect(x).toBe(false);
});
test('1.f3', () => {
  var x = parse('disabled');
  expect(x).toBe(false);
});
