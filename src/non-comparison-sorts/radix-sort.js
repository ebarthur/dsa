// In radix sort, we never directly compare elements in an array
// We put them in what we call buckets based on their digits and sort them

//We're going to sort the ones place first, so all the numbers in
// the ones place are in order from 0 to 9 e.g. if we had the list
//  of [109, 224, 901, 58] after the first was we would have
// [901, 224, 58, 109]. Then we would sort on the tens place,
//ending up with [901, 109, 224, 58]. Then we'd sort by the
// hundreds, getting [58, 109, 224, 901]. And now we are sorted

// Function to get the digit at a specific place in a number
function getDigit(number, place, longestNumber) {
	// Convert the number to a string
	const string = number.toString();
	// Get the length of the string
	const size = string.length;

	// Calculate the difference between the length of the longest number and the current number
	const mod = longestNumber - size;
	// Return the digit at the specific place in the number, or 0 if the place is not within the length of the number
	return string[place - mod] || 0;
}
console.log(getDigit(12345, 5, 5));
// Function to find the longest number in an array
function findLongestNumber(array) {
	// Initialize the longest length to 0
	let longest = 0;
	// Loop over the array
	for (let i = 0; i < array.length; i++) {
		// Get the length of the current number
		const currentLength = array[i].toString().length;
		// If the length of the current number is greater than the longest length, update the longest length
		longest = currentLength > longest ? currentLength : longest;
	}
	// Return the longest length
	return longest;
}

// Function to sort an array using radix sort
function radixSort(array) {
	// Find the longest number in the array
	const longestNumber = findLongestNumber(array);

	// Create an array of 10 empty arrays (buckets)
	const buckets = new Array(10).fill().map(() => []);

	// Loop over the places in the longest number, from right to left
	for (let i = longestNumber - 1; i >= 0; i--) {
		// While the array has elements
		while (array.length) {
			// Remove the first element from the array
			const current = array.shift();
			// Get the digit at the current place in the number
			const digit = getDigit(current, i, longestNumber);
			// Add the number to the corresponding bucket
			buckets[digit].push(current);
		}

		// Loop over the buckets
		for (let j = 0; j < 10; j++) {
			// While the current bucket has elements
			while (buckets[j].length) {
				// Remove the first element from the bucket and add it to the array
				array.push(buckets[j].shift());
			}
		}
	}

	// Return the sorted array
	return array;
}

// Big O - O(n _ k)
// --------
/* In radix sort (and other ones too) we have multiple variables. n is still important but now we have another variable in play here (usually called k or w. Let's go with k for our purposes.) k is going to represents the "maximum key length". The more buckets we need, the larger the complexity. So instead of being O(n²) or O(n _ n), it ends up being O(n _ k). So is it better or worse than O(n log n) sorts? It depends! If you have a lot of numbers with lots of varied lengths that will bucket into a good distribution it can be very effective. If you numbers [1, 10, 100, 1000, 10000, 100000] etc it ends up being the worst sort. It ends up being O(n²) at that point.
 */

// test @specs/radix-sort/radix-sort.test
