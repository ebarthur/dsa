// https://btholt.github.io/complete-intro-to-computer-science/big-o/

// Big - O Notation (worse case complexity)
/*
inSimpleTerms {
it describes the complexity of an algo using algebraic terms
}

// Two important characteristics {
    -->  expressed in terms of the input
    --> it focuses on the bigger picture without having caught up in the minute details
}
*/

// Big - O Time Complexity
//  --> Algorithm to find the sum of first n natural numbers

function summation(n) {
  let sum = 0; // statement 1
  for (let i = 1; i <= n; i++) {
    sum += i; // statement 2
  }
  return sum; // statement 3
}

// Example Usage
const res = summation(20);
console.log(res);

// To determine the time complexity, we count the number of times a STATEMENT executes based on the input size

// --> In our scenario, statement 1 executes just once
// --> statement 2 executes (n=20) times
// --> statement 3 also executes once

/*  Our time complexity is dependant on our input size (the value of n): `n + 2`.Therefore, 
  BIg-O is expressed in terms of input size (verifying our first important characteristics)
  
  It focuses on the bigger picture: {
      if we have n=10000000, the time complexity is dependent on what? 10000000 + 2.
      At this point, +2 becomes insignificant and we can drop it so the time complexity is only 
      dependent on n.
  }
  
  // --> Time Complexity = O(n) - Linear: as the input size increases, the time complexity also increases.
  */

//  --> Another algorithm to find the sum of first n natural numbers

function summation2(n) {
  return (n * (n + 1)) / 2; // executed only once
}

// Example usage
const ans = summation2(20);
console.log(ans);

/* The time complexity of this function is rather 1 - Constant */

// Quadratic Time Complexity
// --> If there are two nested loops, the time complexity is quadratic
// --> O(n**2) - Quadratic

// Cubic Time Complexity
// --> If there are three nested loops, the time complexity is cubic
// --> Input size reduces by half every iteration and time complexity is logarithmic

// Big - O of Objects, Arrays and Methods

const person = {
  firstName: "Bruce",
  lastName: "Wayne",
};

/*  
   // Objects - Big - O {
      An object is a collection of key value pairs
  
      // Time Complexity
      --> Insert - O(1) Constant
      --> Remove - O(1)
      --> Access - O(1)
      --> Search - O(n) Linear
  
      --> object.keys() - O(n) 
      --> object.values() - O(n) 
   }
   */

//  Arrays are ordered collection of values
const odd = [1, 3, 5, 7, 9];

/* 
      // Time Complexity
      --> Insert/Remove - O(1)    
      --> Insert/Remove at beginning - O(n); because the index has to be reset for any remaining element in the array
      --> Acccess - O(1)
      --> Search - O(n)
      
      --> push/pop - O(1)
      --> shift/unshift/concat/slice/splice - O(n)
      --> forEach/map/filter/reduce - O(n)
  */
