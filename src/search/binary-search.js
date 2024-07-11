//  Given a SORTED array of 'n' elements and a target element 't', find the index of 't'
// in the array. Return -1 if the target element is not found

// Iterative Binary Search
function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);

		if (target === array[middle]) {
			return middle;
		}
		if (target < array[middle]) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	return -1;
}

// Recursive Binary Search
function recursiveBinarySearch(array, target) {
	return search(array, target, 0, array.length - 1);
}
const search = (array, target, left, right) => {
	if (left > right) {
		return -1;
	}
	const middle = Math.floor((left + right) / 2);
	if (target === array[middle]) {
		return middle;
	}
	if (target < array[middle]) {
		return search(array, target, left, middle - 1);
	}
	return search(array, target, middle + 1, right);
};

// Big-O - O(log n)
// Space Complexity - O(1)
