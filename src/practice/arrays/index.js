// array methods

const array = [2, 3, 4, 5, 5, 6, 4, 2];

const sum = array.reduce((prev, current) => {
	return prev + current;
}, 0);

console.log(sum);

const filteredArray = array.filter((item) => item > 4);
console.log(filteredArray);

const newMappedArray = array.map((item) => item ** 2);
console.log(newMappedArray);

// returns boolean if an element satisfy the condition
const someArray = array.some((item) => item < 4);
console.log(someArray); // true

const everyElement = array.every((item) => item > 0);
console.log(everyElement); // true

const findThree = array.find((item) => item > 3);
console.log(findThree); // 4

const arr1 = [2, 3, 5, 7];
const arr2 = [1, 7, 9, 11];

const arrT = [...arr1, ...arr2]; // spread operator
console.log(arrT);

console.log(arr1.concat(arr2));

// splice
console.log(arr1.splice(0, 2, "Hello")); // start from 0, delete 2 elements and replace them with "Hello"
console.log(arr1); // [ 'Hello', 5, 7 ]

// fill
arr1.fill(0);
console.log(arr1);

// findIndex
console.log(arr2.findIndex((item) => item === 9)); // 2

// flat
const arre = [1, [3, 2], [7, [2], 0], 8];
console.log(arre.flat(2)); // returns a new array removing all nested arrays

// reverse
console.log(arr2.reverse());

console.log(arr2.sort((a, b) => a - b));
