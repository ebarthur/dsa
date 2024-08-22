class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		if (this.root === null) {
			this.root = new Node(value);
		} else {
			let current = this.root;
			while (true) {
				if (current.value > value) {
					// go left

					if (current.left) {
						current = current.left;
					} else {
						current.left = new Node(value);
						break;
					}
				} else {
					// go right
					if (current.right) {
						current = current.right;
					} else {
						current.right = new Node(value);
						break;
					}
				}
			}
		}
		return this;
	}

	// i want to track the depth
	search(value) {
		let depth = 1;
		let current = this.root;
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
		return `${value} not in Tree`;
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
				current = current.left;
			} else {
				if (current.value < value) {
					current = current.right;
				}
			}
		}
		return false;
	}
}

const myTree = new BST();
myTree.insert(1);
myTree.insert(7);
myTree.insert(7);
myTree.insert(8);
myTree.insert(32);
myTree.insert(3);
console.log(myTree.search(8));
console.log(myTree.search(1));
console.log(myTree.search(4));
console.log(myTree.includes(1));
console.log(myTree.includes(3));
console.log(myTree.includes(10));
console.log(myTree.bfs());
console.log(myTree);
