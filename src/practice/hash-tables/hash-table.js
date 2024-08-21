class HashTable {
	constructor(size = 6) {
		this.keyMap = new Array(size);
	}

	set(key, value) {
		const index = this.#hashFunction(key);

		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
		return this;
	}

	get(key) {
		const index = this.#hashFunction(key);

		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i][1];
				}
			}
		}
		return undefined;
	}

	#hashFunction(key) {
		const PRIME_NUMBER = 31;
		let sum = 0;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			const charCode = key.charCodeAt(i);
			sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
		}

		return sum;
	}
}

// Example usage
const hashTable = new HashTable();
console.log(hashTable.set("secret", "no-mo"));
console.log(hashTable.get("secret"));
