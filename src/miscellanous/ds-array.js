class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.data;
	}

	get(index) {
		return this.data[index];
	}

	pop() {
		delete this.data[this.length - 1];
		this.length--;
		return this.data;
	}

	shift() {
		const firstItem = this.data[0];
		this.#reindex();
		return firstItem;
	}

	delete(index) {
		const item = this.data[index];
		this.#collapse(index);
		return item;
	}

	#collapse(index) {
		for (let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}

	#reindex() {
		for (let i = 0; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}

	serialize() {
		return this.data;
	}
}

const arr = new MyArray();
console.log(arr.push(3));
console.log(arr.push("Afrika"));
console.log(arr.push(9));
console.log(arr.push("Gina"));
console.log(arr.push(9));
console.log(arr.push("Hugh"));
console.log(arr.push(true));
console.log(arr.delete(3));
console.log(arr.pop());
console.log(arr.get(1));
console.log(arr.shift());
console.log(arr.serialize());
console.log(arr);
