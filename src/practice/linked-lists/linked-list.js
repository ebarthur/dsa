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
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		}

		let temp = this.head;

		while (temp.next) {
			temp = temp.next;
		}

		return temp;
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

	// let counter = 0;
	// let temp = this.head;

	// while (temp) {
	// 	if (counter === index) {
	// 		return temp;
	// 	}
	// 	counter++;
	// 	temp = temp.next;
	// }
	// 	return null
	// }

	set(index, value) {
		// did this from scratch but you can use the this.get(index) method to quickly grab the node you want to update
		if (index < 0 || index > this.length) {
			return null;
		}

		let temp = this.head;

		for (let i = 0; i < index; i++) {
			temp = temp.next;
		}
		temp.value = value;
		return temp;
	}

	// for insert, i can use unshift and push to handle edge cases
	// then use get by index method to get the temp value and swap pointers
	// but this way is more generic and standalone and does not require helper methods
	insert(index, value) {
		if (index < 0 || index > this.length) {
			return null;
		}

		const newNode = new Node(value);

		if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			let current = this.head;
			let previous;

			for (let i = 0; i < index; i++) {
				previous = current;
				current = current.next;
			}

			newNode.next = current;
			previous.next = newNode;
		}

		this.length++;
		return newNode;
	}

	size() {
		let temp = this.head;
		let counter = 0;

		while (temp) {
			if (!temp.next) {
				return counter;
			}
			counter++;
			temp = temp.next;
		}
	}

	clear() {
		this.head = null;
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
console.log(myLinkedList.getFirst());
console.log(myLinkedList.getLast());
console.log(myLinkedList.set(1, 15));
console.log(myLinkedList.get(1));
console.log(myLinkedList.insert(0, 8));
console.log(myLinkedList.insert(3, 12));
console.log(myLinkedList.size());
console.log(myLinkedList.clear());
console.log(myLinkedList.size());
console.log(myLinkedList.getLast());
