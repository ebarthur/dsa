// FizzBuzz. Read the code; you get the idea.

function fizzBuzz(arr) {
	return arr.map((num) => {
		if (num % 3 === 0 && num % 5 === 0) {
			return "FizzBuzz";
		}
		if (num % 3 === 0) {
			return "Fizz";
		}
		if (num % 5 === 0) {
			return "Buzz";
		}
		return num;
	});
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];

console.log(fizzBuzz(array));
