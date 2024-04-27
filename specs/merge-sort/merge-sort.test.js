// notes @ src/recursive-sorts/merge-sort

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

  // either left or right will be empty so you can safely concat both
  return results.concat(left, right);
};

// Unit test for merge
test("sorts two arrays of integers using merge", function () {
  const array1 = [1, 4, 8, 12];
  const array2 = [3, 5, 9, 14];
  const answer = merge(array1, array2);
  expect(answer).toEqual([1, 3, 4, 5, 8, 9, 12, 14]);
});

// Unit test for mergeSort
test("sorts an array of integers using merge sort", function () {
  const array = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const answer = mergeSort(array);
  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
