function twoSum(nums, target) {
	const numMap = {};

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (complement in numMap) {
			return [numMap[complement], i];
		}
		numMap[nums[i]] = i;
	}
	return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
