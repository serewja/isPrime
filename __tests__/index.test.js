import isPrime from "../dist/index.js"

test('testname', () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(10)).toBe(false);
  expect(isPrime(-7)).toBe(false);
});