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

	isEmpty() {
		return this.length === 0;
	}

	push(value) {
		const newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;
		this.length++;
		return this;
	}

	pop() {
		if (this.isEmpty()) {
			return "Cannot pop an empty stack";
		}
		let temp = this.top;
		this.top = this.top.next;
		temp = null;
		this.length--;
		return temp;
	}
}

const myStack = new Stack(1);
console.log(myStack.push(4));
console.log(myStack.push(7));
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.isEmpty());
