// There are n candies put from left to right on a table. The candies are numbered from left to right. The i-th candy has weight wi.
// Alice and Bob eat candies. Alice can eat any number of candies from the left (she can't skip candies, she eats them in a row).
// Bob can eat any number of candies from the right (he can't skip candies, he eats them in a row). Of course, if Alice ate a candy,
// Bob can't eat it (and vice versa). They want to be fair. Their goal is to eat the same total weight of candies. What is the most number of candies
// they can eat in total?

function maxCandies(candies) {
	let left = 0; // Alice's pointer
	let right = candies.length - 1; // Bob's pointer
	let aliceSum = 0;
	let bobSum = 0;
	let count = 0;

	while (left <= right) {
		if (aliceSum <= bobSum) {
			aliceSum += candies[left];
			left++;
		} else {
			bobSum += candies[right];
			right--;
		}

		if (aliceSum === bobSum) {
			count = left + (candies.length - right - 1);
		}
	}

	return count;
}

// Test cases
console.log(maxCandies([1000])); // Output: 0
console.log(maxCandies([1, 2, 1])); // Output: 2
console.log(maxCandies([2, 2, 2, 2])); // Output: 4
