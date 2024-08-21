// Implement a stack and find the minimum value in the stack

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(value) {
		const newNode = new Node(value);
		this.top = newNode;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		this.length++;

		newNode.next = this.top;
		this.top = newNode;
		return this;
	}

	min() {
		if (this.length === 0) {
			return null;
		}
		let current = this.top;
		let minValue = current.value;

		for (let i = 0; i < this.length; i++) {
			minValue = Math.min(minValue, current.value);
			current = current.next;
		}
		return minValue;
	}
}

const myStack = new Stack(8);
myStack.push(2);
myStack.push(9);
myStack.push(5);
console.log(myStack);
console.log(myStack.min());
