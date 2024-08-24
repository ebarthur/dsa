function quickSort(arr) {
	// base case
	if (arr.length < 2) {
		return arr;
	}

	const pivot = arr[arr.length - 1];

	const left = [];
	const right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	const sortedLeft = quickSort(left);
	const sortedRight = quickSort(right);

	return [...sortedLeft, pivot, ...sortedRight];
}

const array = [7, 2, 4, 8, 1];
console.log(quickSort(array));
