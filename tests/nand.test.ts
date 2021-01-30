import nand from '../src/nand';


test('0.0', () => {
  var x = nand();
  expect(x).toBe(false);
});
test('1.0', () => {
  var x = nand(false);
  expect(x).toBe(true);
});
test('1.1', () => {
  var x = nand(true);
  expect(x).toBe(false);
});
test('2.2', () => {
  var x = nand(true, false);
  expect(x).toBe(true);
});
test('2.1', () => {
  var x = nand(false, true);
  expect(x).toBe(true);
});
test('2.0', () => {
  var x = nand(false, false);
  expect(x).toBe(true);
});
test('2.0', () => {
  var x = nand(true, true);
  expect(x).toBe(false);
});
test('8.254', () => {
  var x = nand(true, true, true, true, true, true, true, false);
  expect(x).toBe(true);
});
test('8.255', () => {
  var x = nand(true, true, true, true, true, true, true, true);
  expect(x).toBe(false);
});
