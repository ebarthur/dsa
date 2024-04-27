/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
*/

// Insertion sort is strictly better than bubble sort because it does substantially less work and it is more efficient

// Define the insertionSort function that takes an array of numbers as an argument
function insertionSort(nums) {
  // Iterate over the array starting from the second element (index 1)
  for (let i = 1; i < nums.length; i++) {
    // Store the current element in the variable numberToInsert
    let numberToInsert = nums[i];

    // Initialize j to be the index of the last sorted element
    let j;

    // Loop from the right to the left until we find the correct position to insert numberToInsert
    // or we reach the beginning of the array
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // Shift the current sorted element to the right
      nums[j + 1] = nums[j];
    }

    // Insert the number at the correct position in the sorted part of the array
    nums[j + 1] = numberToInsert;
  }
  // Return the sorted array
  return nums;
}

// Big-O - O(n^2)
// Two for loops

// Worse case scenario would be a reversed array
// The best case scenario would be an already sorted array(O(n))
// Spacial complexity is O(1) because we are not using any additional space

// Is this algorithm stable? Yes
// Is this algorithm destructive? Yes

// test @specs/insertion-sort/insertion-sort.test
