/* 
  A stack is a fundamental data structure in computer science that operates on a Last In, First Out (LIFO) principle.
  This means that the last element added to the stack will be the first one to be removed. 
  Imagine a stack of plates: you can only take the top plate off the stack, and you can only add a new plate on top.
   This is how a stack works.
   In JavaScript, a stack can be implemented using an array, leveraging the array's built-in methods such as push() 
   to add an element to the top of the stack and pop() to remove the top element. Other common operations include peek(), 
   which returns the top element without removing it, and isEmpty(), which checks if the stack is empty.
 */

class Stack {
	constructor() {
		this.items = [];
	}

	push(value) {
		this.items.push(value);
		return value;
	}

	pop() {
		if (!this.isEmpty) {
			return null;
		}
		return this.items.pop();
	}

	isEmpty() {
		return this.items.length === 0;
	}

	peek() {
		return this.items[this.items.length - 1];
	}
}

const myStack = new Stack();

console.log(myStack.isEmpty());
console.log(myStack.push(7));
console.log(myStack.push(4));
console.log(myStack.push(10));
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack);
