class Stack {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		if (this.isEmpty()) {
			return "Stack is empty";
		}
		return this.items.pop();
	}

	isEmpty() {
		return this.items.length === 0;
	}
}

// Function to reverse string using stack
function reverseString(str) {
	// Create a new stack
	const stack = new Stack();

	// Push all characters of the string to the stack
	for (let i = 0; i < str.length; i++) {
		stack.push(str[i]);
	}

	// Pop all characters from the stack and build the reversed string
	let reversedStr = "";
	while (!stack.isEmpty()) {
		reversedStr += stack.pop();
	}

	return reversedStr;
}

// Test the function
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);
