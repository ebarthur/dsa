// Linear search is a simple search algorithm that finds the position of a target value
// within an array.

function linearSearch(array, target) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return i;
		}
	}
	return -1;
}
//Big-O - O(n)
