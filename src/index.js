// bubble sort

function bubbleSort(array) {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				const temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return array;
}

const num = [5, 18, 9, 24, 94, 12, 6, 14, 8];

const result = bubbleSort(num);
console.log(`Final sorted array(bubble sort): [${result}]`);

// bubble sort revised

console.log("------------------------------------");

// insertion sort

function insertionSort(array) {
	for (let i = 1; i < array.length - 1; i++) {
		const numberToInsert = array[i];
		let j;

		for (j = i - 1; numberToInsert < array[j] && j >= 0; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = numberToInsert;
	}
	return array;
}

console.log(`Final sorted array(insertion sort): [${insertionSort(num)}]`);

console.log("------------------------------------");

// merge sort

function mergeSort(array) {
	// base case
	if (array.length < 2) {
		return array;
	}

	const middle = Math.floor(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	const sortedLeft = mergeSort(left);
	const sortedRight = mergeSort(right);

	return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
	const result = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	return result.concat(left, right);
}

console.log(`Final sorted array(merge sort): [${mergeSort(num)}]`);

console.log("------------------------------------");

// quick sort

function quickSort(array) {
	// base case
	if (array.length < 2) {
		return array;
	}

	const pivot = array[array.length - 1];
	const left = [];
	const right = [];

	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < pivot) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}

	const sortedLeft = quickSort(left);
	const sortedRight = quickSort(right);

	return [...sortedLeft, pivot, ...sortedRight];
}

console.log(`Final sorted array(quick sort): [${quickSort(num)}]`);

console.log("------------------------------------");

function linearSearch(array, target) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return `${array[i]} found in array`;
		}
	}
	return "Number not in array";
}

console.log(`Linear Search(find 14): ${linearSearch(num, 14)}`);
console.log(`Linear Search(find 87): ${linearSearch(num, 87)}`);

console.log("------------------------------------");

// binary search

// array must be sorted
function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);

		if (array[middle] === target) {
			return `Number found: ${array[middle]}, index: ${middle}`;
		}
		if (target < array[middle]) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	return -1;
}

console.log(binarySearch([5, 6, 8, 9, 12, 14, 18, 24, 94], 94));

function Palindrome(num) {
	if (num === "") return false;

	return num === +num.toString().split("").reverse().join("");
}

console.log(`Palindrome: ${Palindrome(121)}`);

function median(array) {
	const sortedArray = array.sort((a, b) => a - b);
	const middle = Math.floor(sortedArray.length / 2);

	if (sortedArray.length % 2 === 0) {
		return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
	}

	return sortedArray[middle];
}

console.log(`Median: ${median([94, 5, 1, 7, 78, 22, 15, 96, 45, 25])}`);
