function hashURL(url, hash_string, k) {
	// Function to get the value of a character
	function getCharValue(char) {
		if (char >= "a" && char <= "z") {
			return char.charCodeAt(0) - "a".charCodeAt(0);
		}
		if (char === ":") {
			return 26;
		}
		if (char === "/") {
			return 27;
		}
		if (char === ".") {
			return 28;
		}
		return 0; // For any other character
	}

	// Function to hash a block
	function hashBlock(block) {
		return block.split("").reduce((sum, char) => sum + getCharValue(char), 0);
	}

	let result = "";
	for (let i = 0; i < url.length; i += k) {
		// Get the block
		const block = url.slice(i, i + k);

		// Calculate hash value of the block
		const hashValue = hashBlock(block);

		// Replace block with character from hash_string
		result += hash_string[hashValue % hash_string.length];
	}

	return result;
}

// Example usage
const url = "https://xyz.com";
const hash_string = "pqrst";
const k = 4;

console.log(hashURL(url, hash_string, k));
