// notes @src/recursive-sorts/quick-sort

function quickSort(array) {
	// base case, array of length or 1
	if (array.length < 2) {
		return array;
	}
	// choose the last element as the pivot
	const pivot = array[array.length - 1];
	// create left and right arrays
	const left = [];
	const right = [];

	//loop over the array and compare each element to the pivot
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < pivot) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}

	// call quickSort on left and right arrays
	const sortedLeft = quickSort(left);
	const sortedRight = quickSort(right);

	// return left, pivot, and right arrays concatenated
	return [...sortedLeft, pivot, ...sortedRight];
}

test("sorts an array of integers using quick sort", () => {
	const array = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
	const answer = quickSort(array);
	expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
