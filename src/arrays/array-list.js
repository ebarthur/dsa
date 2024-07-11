/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

*/

// Define a class named ArrayList
class ArrayList {
	// Define the constructor function that gets called when a new object is created with this class
	constructor() {
		// Initialize the length property to 0
		this.length = 0;
		// Initialize the data property to an empty object
		this.data = {};
	}
	// Define a method named push that takes a value as an argument
	push(value) {
		// Add the value to the data object at the key that corresponds to the current length
		this.data[this.length] = value;
		// Increment the length property
		this.length++;
	}
	// Define a method named pop
	pop() {
		// Get the value at the key that corresponds to the last element in the data object
		const response = this.data[this.length - 1];
		// Delete the last element from the data object
		delete this.data[this.length - 1];
		// Decrement the length property
		this.length--;
		// Return the value that was removed
		return response;
	}
	// Define a method named get that takes an index as an argument
	get(index) {
		// Return the value at the given index in the data object
		return this.data[index];
	}
	// Define a method named delete that takes an index as an argument
	delete(index) {
		// Get the value at the given index in the data object
		const response = this.data[index];
		// Call the _collapseTo method with the given index
		this._collapseTo(index);
		// Return the value that was deleted
		return response;
	}
	// Define a private method named _collapseTo that takes an index as an argument
	_collapseTo(index) {
		// Loop over the data object starting from the given index
		for (let i = index; i < this.length; i++) {
			// Move each element to the left by one position
			this.data[i] = this.data[i + 1];
		}
		// Delete the last element from the data object
		delete this.data[this.length - 1];
		// Decrement the length property
		this.length--;
	}
	// Define a method named serialize
	serialize() {
		// Return the data object
		return this.data;
	}
}

// for pop, we can use existing methods
/* 
pop(){
  return this.delete(this.length-1)
}
*/
