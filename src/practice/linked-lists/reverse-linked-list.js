// Given a linked list, reverse the list

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
		return newNode;
	}

	reverse() {
		let current = this.head;
		let prev = null;
		let next = null;

		// Swap head and tail
		this.tail = current;

		while (current !== null) {
			next = current.next; // Store the next node
			current.next = prev; // Reverse the link
			prev = current; // Move prev to this node
			current = next; // Move to the next node
		}

		this.head = prev; // Update head to the new first node

		return this;
	}
}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList.push(10));
console.log(myLinkedList.push(2));
console.log(myLinkedList.push(7));
console.log(myLinkedList);
console.log(myLinkedList.reverse());
