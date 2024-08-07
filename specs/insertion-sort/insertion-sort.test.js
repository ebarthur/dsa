// notes @src/iterative-sorts/insertion-sort

function insertionSort(nums) {
	for (let i = 1; i < nums.length; i++) {
		const numberToInsert = nums[i]; // the numberToInsert number we're looking to insert
		let j; // the inner counter

		// loop from the right to the left
		for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
			// move numbers to the right until we find where to insert
			nums[j + 1] = nums[j];
		}

		// do the insertion
		nums[j + 1] = numberToInsert;
	}
	return nums;
}

test("sorts an array of integers using insertion sort", () => {
	const nums = [10, -5, 3, 8, 2, 6, 4, 7, 9, 1];
	insertionSort(nums);
	expect(nums).toEqual([-5, 1, 2, 3, 4, 6, 7, 8, 9, 10]);
});
