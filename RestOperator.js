// 1. Rest in Function Parameters:
// Using rest in function parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15

  

//  2. Rest in Array Destructuring:
const colors = ['red', 'green', 'blue'];

// Using rest in array destructuring
const [firstColor, ...otherColors] = colors;

console.log(firstColor);    // Output: 'red'
console.log(otherColors);   // Output: ['green', 'blue']


//3. Rest with Function Arguments:
// Using rest with function arguments
function printDetails(name, ...details) {
    console.log(`Name: ${name}`);
    console.log(`Details: ${details.join(', ')}`);
  }
  
  printDetails('John', '30 years old', 'Male', 'Engineer');
  // Output:
  // Name: John
  // Details: 30 years old, Male, Engineer

  
//4. Rest in Object Destructuring (since ECMAScript 2018):
const person = { name: 'Alice', age: 25, country: 'USA' };

// Using rest in object destructuring
const { name, ...restInfo } = person;

console.log(name);       // Output: 'Alice'
console.log(restInfo);   // Output: { age: 25, country: 'USA' }
