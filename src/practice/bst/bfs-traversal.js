class Node {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BST {
	constructor(value) {
		const newNode = new Node(value);
		this.root = newNode;
	}

	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let current = this.root;
			while (current) {
				if (current.value > value) {
					// go left

					if (current.left) {
						current = current.left;
					} else {
						current.left = newNode;
						break;
					}
				} else {
					if (current.value < value) {
						// go right

						if (current.right) {
							current = current.right;
						} else {
							const newNode = new Node(value);
							current.right = newNode;
							break;
						}
					}
				}
			}
		}
		return this;
	}

	includes(value) {
		if (!this.root) {
			return false;
		}
		let current = this.root;
		while (current) {
			if (current.value === value) {
				return true;
			}
			if (current.value > value) {
				// go left
				current = current.left;
			} else {
				// go right
				if (current.value < value) {
					current = current.right;
				}
			}
		}
		return false;
	}

	search(value) {
		if (!this.root) {
			return null;
		}

		let current = this.root;
		let depth = 1;

		while (current) {
			if (current.value === value) {
				return `Found ${value} at depth ${depth}`;
			}
			if (current.value > value) {
				current = current.left;
				depth++;
			} else {
				if (current.value < value) {
					current = current.right;
					depth++;
				}
			}
		}
		return `${value} Not In Tree`;
	}

	bfs() {
		if (!this.root) {
			return null;
		}

		const queue = [];
		const data = [];
		const current = this.root;

		queue.push(current);

		while (queue.length) {
			const current = queue.shift();
			data.push(current.value);

			if (current.left) {
				queue.push(current.left);
			}
			if (current.right) {
				queue.push(current.right);
			}
		}
		return data;
	}
}

const bst = new BST(7);
bst.insert(4);
bst.insert(9);
bst.insert(2);

console.log(bst.includes(10));
console.log(bst.search(2));
console.log(bst.bfs());
console.log(bst);
