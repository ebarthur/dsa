// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
// Return the score of s

function scoreOfString(s) {
	let ans = 0;
	for (let i = 1; i < s.length; i++) {
		ans += Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i));
	}
	return ans;
}

console.log(scoreOfString("hello"));
