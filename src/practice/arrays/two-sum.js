// Imagine you have a list of numbers and a target number. Your jon is to find two numbers in that list that add up to the target number. You also need to tell which positions
// or indexes those two numbers are at in the list

// Example
// If the list is [2,7,11,15] and the target is 9, then the answer would be [0,1] because 2(at index 0) plus 7 (at index 1) equals 9

function twoSum(array, target) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === target) return [i, j];
		}
	}
}

console.log(twoSum([2, 7, 11, 15], 9));
