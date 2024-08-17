// Given a string, reverse the string
// Example: 'Hello'=> 'olleH

function reverseString(string) {
	return string.split("").reverse().join("");
}

console.log(reverseString("Hello"));
console.log(reverseString("Solin"));
