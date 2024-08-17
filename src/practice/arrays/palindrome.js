// Given a string, return true if the string is a palindrome else false

// Example: 'cddc' => 'cddc' true
// Example: 'Hello' => 'olleH' false

function palindrome(string) {
	return string === "" ? true : string === string.split("").reverse().join("");
}

console.log(palindrome("cddc")); // true
console.log(palindrome("Hello")); // false
console.log(palindrome("")); // true
