// notes @src/recursion/index

// This is an algorithm for fibonnaci without recursive calls
// This is efficient for computing large fibonnaci arguments

function fibonacci(n) {
  // Initialize the sequence with the first two Fibonacci numbers
  const sequence = [0, 1];

  // Start from the third number and calculate up to the nth number
  for (let i = 2; i < n + 1; i++) {
    // Add the next number in the sequence which is the sum of the previous two numbers
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  // Return the nth number in the Fibonacci sequence
  return sequence[n];
}

test("finds the nth Fibonacci number", () => {
  const result = fibonacci(10);
  expect(result).toBe(55);
});
