// The spread operator (...) in JavaScript is used for expanding elements. 
// It allows an iterable, such as an array or a string, to be expanded or spread into individual elements. 
// The spread operator can be used in various contexts, including arrays, function arguments, and object literals.

//1. Spread in Arrays:
const numbers = [1, 2, 3];

// Using spread to create a new array
const newArray = [...numbers, 4, 5];

console.log(newArray); // Output: [1, 2, 3, 4, 5]


//2. Spread in Function Arguments:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  const values = [1, 2, 3, 4, 5];
  
  // Using spread to pass elements of an array as arguments to a function
  console.log(sum(...values)); // Output: 15

  
//3. Spread in Object Literals:
const person = { name: 'Alice', age: 25 };
const job = { occupation: 'Engineer' };

// Using spread to create a new object by combining properties
const personWithJob = { ...person, ...job };

console.log(personWithJob);
// Output: { name: 'Alice', age: 25, occupation: 'Engineer' }

//4. Copying Arrays and Objects:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

const originalObject = { key: 'value' };
const copiedObject = { ...originalObject };

//5. Spread in Strings:
const string = 'hello';

// Using spread to convert a string into an array of characters
const charArray = [...string];

console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']
