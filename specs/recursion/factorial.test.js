// notes @src/recursion/index

//Function to find the facorial of a number
function factorial(n) {
	// base case
	if (n < 2) {
		return 1;
	}

	// recursive call
	return n * factorial(n - 1);
}

test("finds the factorial of a number", () => {
	expect(factorial(1)).toEqual(1);
	expect(factorial(2)).toEqual(2);
	expect(factorial(3)).toEqual(6);
	expect(factorial(10)).toEqual(3628800);
});
