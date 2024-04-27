// Space Complexity

// O(1) Space Complexity
const funnyNumber = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

let score = [420, 96, 12, 69, 77];

// console.log(funnyNumber(score));

// O(n) Space Complexity
const funnyNumberArray = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i * 69);
  }
  return array;
};

// console.log(funnyNumberArray(5));

// Primitive Types ->
// Boolean, num, undefined, null => Constant
// String, arrays, objects => dynamic

// O(n^2) Space Complexity
function createMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}

[[1, 2, 3], [], []];

// example usage
const matrix = createMatrix(10);
console.log(matrix);

// Big - O Space Complexity
/*
   --> If the memory needed does not depend on the input size, the space
  complexity is constant. 
  eg. sorting algorithms which sort within the array without utilizing additonal arrays
  
   --> Linear
   --> Quadratic: This type of space complexity is something you should avoid
   --> Logarithmic
   */
