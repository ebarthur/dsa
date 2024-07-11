// Given an array of integers nums and an integer target
// Return the indices of two nums such that they add up to target

// Brute force: So we pair each number in the array to find which two nums add up to target
function twoSum(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) return [i, j];
		}
	}
}

// Big-O => O(n^2)

console.log(twoSum([1, 2, 4, 5], 9));
console.log(twoSum([1, 2, 4, 5], 6));
console.log(twoSum([1, 2, 4, 5], 7));

// Using Objects
const two_sum = (nums, target) => {
	const obj = {};

	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if (obj[target - n] >= 0) {
			return [obj[target - n], i];
		}
		obj[n] = i;
	}

	return []; // if no pairs are matched
};
console.log(two_sum([1, 2, 4, 5], 9));
console.log(two_sum([1, 2, 4, 5], 6));
console.log(two_sum([1, 2, 4, 5], 7));
