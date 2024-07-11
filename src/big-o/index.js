/* 
// Algorithms
--> Algorithms are a set of well-defined instructions to solve a particular problem

// Characteristics
--> well-defined inputs and outputs
--> each step should be clear and unambiguous
--> language independent (could be implemented in any language)


// Measuring Performance
// Factors on which the absolute performance of an algo cannot be predicted
--> programming language used
--> the computer the program runs on
--> other programs running at the same time
--> quality of the OS etc.

// Evaluation of an algo in terms of input size

--> Time Complexity ==> the amount of time taken by an algo to run, as a function of input size

--> Space Complexity ==> the amount of space taken by an algo to run, as a function of input size

// TIme & Space Complexity
// How to Represent Complexity

--> Asymptotic notations {
    defn: math tools to represent time and space complexity

    types {
        -->  Big-O Notation (worse case complexity)
        -->  Omega Notation (best case complexity)
        -->  Theta Notation (average case complexity)

        PS: We are going to focus on the worst case complexity
    }
}
*/
function fib(n) {
	if (n === 1 || n === 2) {
		return 1;
	}
	if (n < 1) {
		return 0;
	}
	return fib(n - 1) + fib(n - 2);
}

console.log(fib(-1));
