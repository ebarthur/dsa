function mergeSort(arr) {
	// base case
	if (arr.length < 2) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	const sortedLeft = mergeSort(left);
	const sortedRight = mergeSort(right);

	return merge(sortedLeft, sortedRight);
}

// takes two sorted arrays and merge them
function merge(left, right) {
	const result = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	return result.concat(left, right);
}

const array = [7, 2, 4, 8, 1];
console.log(mergeSort(array));
