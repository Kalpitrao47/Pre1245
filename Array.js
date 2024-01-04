// 1. Declaration and Initialization:
// Using array literal
const fruits = ['apple', 'banana', 'orange'];

// Using Array constructor
const numbers = new Array(1, 2, 3, 4, 5);


//2. Accessing Elements:
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]); // Output: 'apple'


// 3. Array Methods:
const numbers = [1, 2, 3, 4, 5];

// Adding elements
numbers.push(6); // Adds 6 to the end
numbers.unshift(0); // Adds 0 to the beginning

// Removing elements
numbers.pop(); // Removes the last element
numbers.shift(); // Removes the first element

// Finding an element
const index = numbers.indexOf(3); // Returns the index of 3

// 4. Array Length:
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // Output: 3


// 5. Iterating Over Arrays:
const fruits = ['apple', 'banana', 'orange'];

// Using a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using forEach
fruits.forEach(fruit => console.log(fruit));


//6. Array Spread and Rest:
const originalArray = [1, 2, 3];
const copyArray = [...originalArray]; // Creates a shallow copy

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}


//ARRAY DESTRUCTURING
// Basic array destructuring
const numbers = [1, 2, 3];

// Destructuring assignment
const [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

//Swapping Values:
let a = 1;
let b = 2;

// Swapping values using array destructuring
[a, b] = [b, a];

console.log(a); // Output: 2
console.log(b); // Output: 1

//Rest Parameter:
const colors = ['red', 'green', 'blue'];

const [primaryColor, ...secondaryColors] = colors;

console.log(primaryColor);    // Output: 'red'
console.log(secondaryColors); // Output: ['green', 'blue']


