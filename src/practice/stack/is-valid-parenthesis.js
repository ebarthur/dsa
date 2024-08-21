class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		this.length++;

		newNode.next = this.top;
		this.top = newNode;
		return newNode;
	}

	pop() {
		if (this.isEmpty()) {
			return null;
		}
		const poppedValue = this.top.value;
		this.top = this.top.next;
		this.length--;
		return poppedValue;
	}

	isEmpty() {
		return this.length === 0;
	}
}

function isValidParenthesis(str) {
	const stack = new Stack();

	for (const char of str) {
		if (char === "(") {
			stack.push(char);
		} else if (char === ")") {
			if (stack.isEmpty() || stack.pop() !== "(") {
				return false;
			}
		}
	}

	return stack.isEmpty();
}

console.log(isValidParenthesis("()"));
console.log(isValidParenthesis("())"));
