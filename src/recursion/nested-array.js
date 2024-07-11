/* 
  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

// Function to calculate the sum of all numbers in a potentially nested array
function nestedAdd(array) {
	// Initialize the sum to 0
	let sum = 0;

	// Iterate over each element in the array
	for (let i = 0; i < array.length; i++) {
		// Get the current element
		const current = array[i];

		// Check if the current element is an array
		if (Array.isArray(current)) {
			// If it's an array, recursively calculate the sum of its elements
			sum += nestedAdd(current);
		} else {
			// If it's not an array, add the element to the sum
			sum += current;
		}
	}

	// Return the total sum
	return sum;
}

// Big-O - This is a complex function because it is not modelled on how
// many items are in the array but how many nested arrays are in the array.
// So, the time complexity is O(n)k where k is the number of nested arrays in the array
// or simply the depth of the nested arrays.

// test @specs/recursion/nested-array.test
