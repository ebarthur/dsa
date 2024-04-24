/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  // Declare a variable to track if a swap occurred in the current iteration
  let swapped;
  // Get the length of the array
  let n = nums.length;
  // Start a loop that continues until no swaps are made in an iteration
  do {
    // Initially set swapped to false for each iteration
    swapped = false;
    // Iterate over the array
    for (let i = 0; i < n; i++) {
      // If the current element is greater than the next one
      if (nums[i] > nums[i + 1]) {
        // Swap the elements
        const temp = nums[i]; // Temporarily store the current element
        nums[i] = nums[i + 1]; // Replace the current element with the next one
        nums[i + 1] = temp; // Replace the next element with the stored current element
        // Set swapped to true as a swap has occurred
        swapped = true;
      }
    }
    // Continue the loop if a swap occurred in the current iteration
  } while (swapped);
  // The array is now sorted in ascending order
}

// Big-O - O(n^2)

// test @specs/bubble-sort/bubble-sort.test

//https://visualgo.net/en/sorting
