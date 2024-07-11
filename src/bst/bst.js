/*

Binary Search Tree!

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

In order for this to work and for the unit tests to pass you, you must implement a Tree .toObject function that returns
your tree as a series of nested objects. Those nested objects must use the following names for their properties

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/

class Tree {
	constructor() {
		this.root = null;
	}
	add(value) {
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

	search(value) {
		let current = this.root;

		while (current) {
			if (current.value === value) {
				return `${value} Found`;
			}
			if (current.value > value) {
				current = current.left;
			} else {
				current = current.right;
			}
		}

		return `${value} Not In Tree`;
	}

	delete(value) {
		this.root = this.removeNode(this.root, value);
	}

	removeNode(node, key) {
		if (node === null) {
			// tree is empty
			return null;
		}
		if (key < node.value) {
			node.left = this.removeNode(node.left, key);
			return node;
		}
		if (key > node.value) {
			node.right = this.removeNode(node.right, key);
			return node;
		}
		// node to be deleted is found
		if (node.left === null && node.right === null) {
			// node has no children
			node = null;
			return node;
		}
		if (node.left === null) {
			// node has one child (right)
			node = node.right;
			return node;
		}
		if (node.right === null) {
			// node has one child (left)
			node = node.left;
			return node;
		}

		// node has two children
		const aux = this.findMinNode(node.right);
		node.value = aux.value;

		node.right = this.removeNode(node.right, aux.value);
		return node;
	}

	findMinNode(node) {
		if (node.left === null) {
			return node;
		}
		return this.findMinNode(node.left);
	}

	toJSON() {
		return JSON.stringify(this.root.serialize(), null, 4);
	}
	toObject() {
		return this.root.serialize();
	}
}

class Node {
	constructor(value = null, left = null, right = null) {
		this.left = left;
		this.right = right;
		this.value = value;
	}
	serialize() {
		const ans = { value: this.value };
		ans.left = this.left === null ? null : this.left.serialize();
		ans.right = this.right === null ? null : this.right.serialize();
		return ans;
	}
}

const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
const tree = new Tree();
nums.map((num) => tree.add(num));
const objs = tree.toObject();

console.log(objs);

// {
//   value: 3,
//     left: {
//   value: 1,
//     left: null,
//     right: { value: 2, left: null, right: null }
// },
//   right: {
//     value: 7,
//       left: { value: 4, left: null, right: [Object] },
//     right: { value: 10, left: [Object], right: null }
//   }
// }
