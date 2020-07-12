import isPrime from "../dist/index.js"

test('testname', () => {
  expecet(isPrime(1)).toBe(false);
  expecet(isPrime(7)).toBe(true);
  expecet(isPrime(10)).toBe(false);
  expecet(isPrime(-7)).toBe(false);
});