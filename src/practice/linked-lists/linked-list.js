class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
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
		} else {
			this.tail.next = newNode;
		}
		this.tail = newNode;
	}

	pop() {
		if (!this.head) return null;

		let temp = this.head;
		let prev = this.head;

		while (temp.next) {
			prev = temp;
			temp = prev.next;
		}

		this.tail = prev;
		this.tail.next = null;
		this.length--;

		return temp;
	}

	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		if (!this.head) return null;
		const temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}
		return temp;
	}

	getFirst() {
		return this.head.value;
	}

	getLast() {
		return this.tail.value;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}

		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}

		return current;
	}
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(6);
myLinkedList.push(4);
myLinkedList.push(7);
console.log(myLinkedList.pop());
console.log(myLinkedList.unshift(10));
console.log(myLinkedList.shift());
console.log(myLinkedList.get(2));
console.log(`First item: ${myLinkedList.getFirst()}`);
console.log(`Last item: ${myLinkedList.getLast()}`);
