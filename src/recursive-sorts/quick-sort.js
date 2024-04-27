// Quick sort is better spacially because it uses less memory to do

// It's another divide-and-conquer, recursive algorithm but it takes a slightly different approach.
// The basic gist is that you take the last element in the list and call that the pivot.
// Everything that's smaller than the pivot gets put into a "left" list and everything that's greater
// get's put in a "right" list. You then call quick sort on the left and right lists independently (hence the recursion.)
// After those two sorts come back, you concatenate the sorted left list, the pivot, and then the right list (in that order.)
// The base case is when you have a list of length 1 or 0, where you just return the list given to you.

// Quick sort algorithm
function quickSort(array) {
  // base case, array of length  or 1
  if (array.length < 2) {
    return array;
  }
  // choose the last element as the pivot
  const pivot = array[array.length - 1];

  // create left and right arrays
  const left = [];
  const right = [];

  //loop over the array and compare each element to the pivot
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // call quickSort on left and right arrays
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // return left, pivot, and right arrays concatenated
  return [...sortedLeft, pivot, ...sortedRight];
}

// Big-O - O(n log n)

// The worst case? An already sorted array
/* The pivot would always be the largest number in the array, meaning the left array would always be full and the right array would always be empty. In order for us to get that log n magic instead of just n, we need to be able to skip some comparisons. If it's sorted, we will compare every number against every other so we'd end up with O(n²). Same would apply with a reverse-sorted list. */

// The best case? A random array
/* That way the pivots will tend to be more in the middle so we'll get a good mix in our left and right arrays which is where that log n magic comes in. In these cases, it'll be O(n log n) like merge sort. */

// Spacial complexity is O(n) because we will be creating new
// arrays for each recursive calls

// This has a better space complexity than merge sort and
// technically it can go a little faster

// The algorithm implemented above is a non-destructive version but we can also do it destructively which has a better spacial complexity
