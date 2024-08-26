// Write a function that takes an arrat and a chunk size as input. The function should run a new array where the original array is split into chunks of the
// specified size

// Example: chunk([1,2,3,4,5,6,7,8], 3) => [[1,2,3], [4,5,6], [7,8]]
// chunk([1,2,3,4,5], 2) => [[1,2], [3,4]]

function arrayChunk(array, num) {
	const result = [];
	let tempArray = [];

	for (let i = 0; i < array.length; i++) {
		const current = array[i];

		if (tempArray.length < num) {
			tempArray.push(current);
		} else {
			result.push(tempArray);
			tempArray = [current]; // Start a new chunk with the current element
		}
	}

	if (tempArray.length > 0) {
		result.push(tempArray); // Push the last chunk if it's not empty
	}

	return result;
}

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Optimized solution

// ------------------

// function arrayChunk(array, chunkSize) {
// 	const result = [];

// 	for (let i = 0; i < array.length; i += chunkSize) {
// 		const chunk = array.slice(i, i + chunkSize);
// 		result.push(chunk);
// 	}

// 	return result;
// }

function chunk(array, size) {
	const chunked = [];
	let index = 0;

	while (index < array.length) {
		const chunk = array.slice(index, index + size);
		console.log("-----------", chunk);
		chunked.push(chunk);
		index += size;
	}
	return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

function _chunk(arr, size) {
	const chunked = [];
	for (let i = 0; i < arr.length; i += size) {
		const chunks = arr.slice(i, i + size);
		chunked.push(chunks);
	}
	return chunked;
}

console.log(_chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
