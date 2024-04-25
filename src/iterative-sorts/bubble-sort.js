/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/
// sentinel variable/flag - it is used to control the flow of a program.

function bubbleSort(nums) {
  // Declare a sentinel variable to track if a swap occurred in the current iteration
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
// Outer while loop, inner for loop

// Worse case scenario would be a reversed array
// The best case scenario would be an already sorted array(O(n))
// Spacial complexity is O(1) because we are not using any additional space

// Is this algorithm stable? Yes
// An algorithm is stable if it preserves the relative order of equal elements
// so for instance if we have two 5s in the array, the first 5 will always be
// before the second 5 in the sorted array

// Is this algorithm destructive? Yes
// Bubble sort is destructive because it modifies the original input array
// test @specs/bubble-sort/bubble-sort.test

// https://btholt.github.io/complete-intro-to-computer-science/bubble-sort/
// https://visualgo.net/en/sorting
