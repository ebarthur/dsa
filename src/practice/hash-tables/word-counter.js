// Given a string

function wordCounter(str) {
	const words = str.trim().split(/\s+/);

	const wordMap = {};

	for (const word of words) {
		if (wordMap[word]) {
			wordMap[word]++;
		} else {
			wordMap[word] = 1;
		}
	}

	return wordMap;
}

const text = "hello my name name is arthur arthur arthur";

console.log(wordCounter(text));
