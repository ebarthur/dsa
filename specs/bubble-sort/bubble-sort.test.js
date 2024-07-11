// notes @src/iterative-sorts/bubble-sort

function bubbleSort(nums) {
	let swapped;
	const n = nums.length;

	do {
		swapped = false;

		for (let i = 0; i < n; i++) {
			if (nums[i] > nums[i + 1]) {
				// Swap elements
				const temp = nums[i];
				nums[i] = nums[i + 1];
				nums[i + 1] = temp;

				swapped = true;
			}
		}
	} while (swapped); // Continue if a swap occurred
	return nums; // Return the sorted array
}

test("sorts an array of integers using bubble sort", () => {
	const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
	bubbleSort(nums);
	expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
