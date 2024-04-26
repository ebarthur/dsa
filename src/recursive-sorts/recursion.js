// https://btholt.github.io/complete-intro-to-computer-science/recursion/

// tests @specs/recursion

// A recursive function is a function that calls itself

function countTo(max, current, list) {
  if (current > max) return;
  console.log(current);
  countTo(max, current + 1);
}

const counts = countTo(5, 1, []);

// The base case is when we stop recursing. If we don't have a base case,
// then our recursion will spiral out of control and we will get a stack
// overflow (hence the name of the helpful website) when we run out of memory.

function fibonnaci(n) {
  // base case
  if (n === 1 || n == 2) {
    return 1;
  } else if (n < 1) {
    return 0;
  }

  // recursive calls
  return fibonnaci(n - 2) + fibonnaci(n - 1);
}

console.log(fibonnaci(6));

// This is not efficient because what if we need to find fibonacci of a fairly large
// number like 610. How many times will it add 1 to itself to get the answer. It makes this model
// super inefficient.

// Recursive Factorial

function factorial(n) {
  // base case
  if (n < 2) {
    return 1;
  }

  // recursive call
  return n * factorial(n - 1);
}

// 5! = 5 * (4 * (3 * (2 * 1))) = 120
// So basically each iteration multiplies the number by the previous number until it gets to 1
// Big-O = O(n)
