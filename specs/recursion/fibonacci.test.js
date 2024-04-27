// notes @src/recursion/index

function fibonacci(n) {
  // base case
  if (n === 1 || n == 2) {
    return 1;
  } else if (n < 1) {
    return 0;
  }

  // recursive calls
  return fibonacci(n - 2) + fibonacci(n - 1);
}

test("finds the nth Fibonacci number", () => {
  const result = fibonacci(10);
  expect(result).toBe(55);
});
