function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j;
		const numberToInsert = arr[i];
		for (j = i - 1; arr[j] > numberToInsert && j >= 0; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = numberToInsert;
	}

	return arr;
}

const array = [7, 2, 4, 8, 1];
console.log(insertionSort(array));
