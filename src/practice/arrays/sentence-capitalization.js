// Given a string, capitalize each word in that string

function capitalizeSentence(string) {
	return string
		.toLowerCase()
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
}

console.log(capitalizeSentence("hello arthur"));
console.log(capitalizeSentence("how many legs have a spider?"));
