// notes @src/non-comparison-sorts/radix-sort

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

describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
