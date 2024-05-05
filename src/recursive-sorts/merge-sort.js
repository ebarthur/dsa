/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in an array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

// With merge sort, every case is the best case scenario,
// the worst case scenario, and the average case scenario

// No matter what you throw at merge sort, it will always be O(n log n)
// Spacial complexity is O(n) because we are creating a new array and at least every element
// eventually gets their own array

// Merge sort is a stable algorithm
// Merge sort is a non-destructive algorithm

// We need two functions, mergeSort and merge

// Merge sort is a sorting algorithm that uses the divide and conquer technique.
// It divides the input array into two halves, calls itself for the two halves,
// and then merges the two sorted halves.

// Function to merge two sorted arrays
const mergeSort = (array) => {
  // base case
  if (array.length < 2) {
    return array;
  }

  // split the array into two halves
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // call mergeSort on left and right
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // return the merge of left and right
  return merge(sortedLeft, sortedRight);
};

// Merge function to merge two sorted arrays
const merge = (left, right) => {
  const results = [];

  // go until one list runs outs
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift removes the first element in an array and returns it
      // it's like .pop() for the front
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // either left or right will be empty, so you can safely concat both
  return results.concat(left, right);
};

// After line 49, we don't have to manually increment an index after every push.
// When you push an element into an array in JavaScript, it automatically gets
// placed at the next available index. The index is implicitly handled by the array
// itself.

// test @specs/merge-sort/merge-sort.test
