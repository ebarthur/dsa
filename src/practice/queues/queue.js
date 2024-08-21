// A queue is a linear data structure that functions like a waiting line. It follows the FIFO (First In, First Out) principle,
// meaning the element that enters the queue first wil be the first one to be removed.

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(value) {
		this.front = new Node(value);
		this.rear = this.front;
		this.length = 1;
	}

	enqueue(value) {
		const newNode = new Node(value);
		this.length++;

		if (this.length === 0) {
			this.front = newNode;
			this.rear = newNode;
		} else {
			newNode.next = this.rear;
			this.rear = newNode;
		}
		return this;
	}

	dequeue() {
		if (this.length === 0) {
			return null;
		}

		let current = this.rear;
		let prev;

		for (let i = 0; i < this.length - 1; i++) {
			prev = current;
			current = current.next;
		}
		this.front = prev;
		this.front.next = null;
		this.length--;

		return this;
	}
}

const theQueue = new Queue(2);
console.log(theQueue.enqueue(6));
console.log(theQueue.enqueue(10));
console.log(theQueue.enqueue(17));
console.log(theQueue.enqueue(0));
console.log(theQueue.dequeue());
console.log(theQueue.dequeue());
