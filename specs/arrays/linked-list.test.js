// notes @src/arrays/linked-list

class LinkedList {
	constructor() {
		this.tail = this.head = null;
		this.length = 0;
	}
	push(value) {
		const node = new Node(value);
		this.length++;
		if (!this.head) {
			this.head = node;
		} else {
			this.tail.next = node;
		}
		this.tail = node;
	}
	pop() {
		if (!this.head) return null;
		if (this.head === this.tail) {
			const node = this.head;
			this.head = this.tail = null;
			return node.value;
		}
		const penultimate = this._find(
			null,
			(value, nodeValue, i, current) => current.next === this.tail,
		);
		const ans = penultimate.next.value;
		penultimate.next = null;
		this.tail = penultimate;
		this.length--;
		return ans;
	}
	_find(value, test = this.test) {
		let current = this.head;
		let i = 0;
		while (current) {
			if (test(value, current.value, i, current)) {
				return current;
			}
			current = current.next;
			i++;
		}
		return null;
	}
	get(index) {
		const node = this._find(index, this.testIndex);
		if (!node) return null;
		return node.value;
	}
	delete(index) {
		if (index === 0) {
			const head = this.head;
			if (head) {
				this.head = head.next;
			} else {
				this.head = null;
				this.tail = null;
			}
			this.length--;
			return head.value;
		}

		const node = this._find(index - 1, this.testIndex);
		const excise = node.next;
		if (!excise) return null;
		node.next = excise.next;
		if (!node.next.next) this.tail = node.next;
		this.length--;
		return excise.value;
	}
	test(search, nodeValue) {
		return search === nodeValue;
	}
	testIndex(search, __, i) {
		return search === i;
	}
	serialize() {
		const ans = [];
		let current = this.head;
		if (!current) return ans;
		while (current) {
			ans.push(current.value);
			current = current.next;
		}
		return ans;
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// unit tests
// do not modify the below code
describe("LinkedList", () => {
	const range = (length) =>
		Array.apply(null, { length: length }).map(Number.call, Number);
	const abcRange = (length) =>
		range(length).map((num) => String.fromCharCode(97 + num));
	let list;

	beforeEach(() => {
		list = new LinkedList();
	});

	test("constructor", () => {
		expect(list).toEqual(expect.any(LinkedList));
	});

	test("push", () => {
		abcRange(26).map((character) => list.push(character));
		expect(list.length).toEqual(26);
	});

	test("pop", () => {
		abcRange(13).map((character) => list.push(character));
		expect(list.length).toEqual(13);
		range(10).map(() => list.pop());
		expect(list.length).toEqual(3);
		expect(list.pop()).toEqual("c");
	});

	test("get", () => {
		list.push("first");
		expect(list.get(0)).toEqual("first");
		list.push("second");
		expect(list.get(1)).toEqual("second");
		expect(list.get(0)).toEqual("first");
		abcRange(26).map((character) => list.push(character));
		expect(list.get(27)).toEqual("z");
		expect(list.get(0)).toEqual("first");
		expect(list.get(9)).toEqual("h");
		list.pop();
		expect(list.get(list.length - 1)).toEqual("y");
	});

	test("delete", () => {
		abcRange(26).map((character) => list.push(character));
		list.delete(13);
		expect(list.length).toEqual(25);
		expect(list.get(12)).toEqual("m");
		expect(list.get(13)).toEqual("o");
		list.delete(0);
		expect(list.length).toEqual(24);
		expect(list.get(0)).toEqual("b");
	});
});
