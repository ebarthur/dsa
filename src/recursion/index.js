// tests @specs/recursion

// A recursive function is a function that calls itself

function countTo(max, current) {
  if (current > max) return;
  console.log(current);
  countTo(max, current + 1);
}

const counts = countTo(5, 1);

console.log(counts);

// The base case is when we stop recurring. If we don't have a base case,
// then our recursion will spiral out of control, and we will get a stack
// overflow (hence the name of the helpful website) when we run out of memory.

function fibonnaci(n) {
  // base case
  if (n === 1 || n === 2) {
    return 1;
  } else if (n < 1) {
    return 0;
  }

  // recursive calls
  return fibonnaci(n - 2) + fibonnaci(n - 1);
}

console.log(fibonnaci(8));

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


// ArraySum is a function that takes an array of numbers and returns the sum of all the numbers in the array
// The function uses recursion to calculate the sum of the numbers in the array

function arraySum(array) {
  // base case
  if (array.length === 0) {
    return 0;
  }

  // recursive call
  return array[0] + arraySum(array.slice(1));
}

// Big-O = O(n) because it will iterate through all the elements in the array

console.log(arraySum([1, 2, 3, 4, 5])); // 15