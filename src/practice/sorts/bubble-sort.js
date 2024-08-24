function bubbleSort(arr) {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				const temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
}
const array = [7, 2, 4, 8, 1];
console.log(bubbleSort(array));
