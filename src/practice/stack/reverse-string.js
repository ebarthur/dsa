function reverseString(str) {
	const stack = [];

	const array = str.split(""); // convert string into array

	for (const item of array) {
		stack.push(item);
	}

	let reversedStr = "";
	while (stack.length !== 0) {
		reversedStr += stack.pop();
	}

	return reversedStr;
}

console.log(reverseString("hello world"));
