class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		this.length++;

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		return this;
	}

	pop() {
		if (!this.head) return null;

		const temp = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			temp.prev = null;
		}

		this.length--;
		return this;
	}

	unshift(value) {
		const newNode = new Node(value);
		this.length++;
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		return this;
	}

	shift() {
		if (!this.head) return null;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let temp = this.head;
			const next = this.head.next;

			this.head = this.head.next;
			next.prev = null;
			temp = null;
		}
		this.length--;
		return this;
	}
}

const myDLinkedList = new DoublyLinkedList(1);
console.log(myDLinkedList.push(8));
console.log(myDLinkedList.push(5));
console.log(myDLinkedList.push(10));
console.log(myDLinkedList.pop());
console.log(myDLinkedList.unshift(16));
console.log(myDLinkedList.shift());
console.log(myDLinkedList.shift());
console.log(myDLinkedList.shift());
