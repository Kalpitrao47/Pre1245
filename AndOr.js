//Logical AND (&&):
// The && operator returns the first falsy operand or the last truthy operand. 
// If all operands are truthy, it returns the last truthy operand.

// Example 1
const x = 5;
const y = 10;

if (x > 0 && y > 0) {
  console.log("Both x and y are greater than 0");
} else {
  console.log("At least one of x or y is not greater than 0");
}

// Example 2
const isValid = true;
const hasPermission = true;

const canPerformAction = isValid && hasPermission;

console.log(canPerformAction); // Output: true



// Logical OR (||):
// The || operator returns the first truthy operand or the last falsy operand. 
// If all operands are falsy, it returns the last falsy operand.
// Example 1
const username = "Alice";
const defaultUsername = "Guest";

const displayUsername = username || defaultUsername;

console.log(displayUsername); // Output: "Alice"

// Example 2
const isLoggedIn = false;
const redirectToLoginPage = true;

const shouldRedirect = isLoggedIn || redirectToLoginPage;

console.log(shouldRedirect); // Output: true




//Combining && and ||:
// You can combine these operators for more complex conditions.
const age = 25;
const hasID = true;

// If age is greater than or equal to 18 and hasID is true
if (age >= 18 && hasID) {
  console.log("You are eligible to enter.");
} else {
  console.log("You are not eligible to enter.");
}


