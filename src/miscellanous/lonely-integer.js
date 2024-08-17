// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// a = [1, 2, 3, 4, 3, 2, 1]
// The unique element is 4.

function lonelyInteger(a) {
	let result = 0;

	// XOR all elements in the array
	for (const num of a) {
		result ^= num;
	}
	return result;
}

const array = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyInteger(array));
