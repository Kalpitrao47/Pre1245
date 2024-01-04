const person = {
    name: 'John Doe',
    age: 30,
    gender: 'male'
  };

  
//   Accessing Object Properties:
//   You can access the properties of an object using the dot notation or square brackets:
  
  console.log(person.name); // Output: 'John Doe'
  console.log(person['age']); // Output: 30

// Object Destructuring:
const { name, age, gender } = person;

console.log(name);   // Output: 'John Doe'
console.log(age);    // Output: 30
console.log(gender); // Output: 'male'


//Nested Object Destructuring:
const student = {
    details: {
      name: 'Alice',
      age: 22
    },
    grade: 'A'
  };
  
  const { details: { name, age }, grade } = student;
  
  console.log(name); // Output: 'Alice'
  console.log(age);  // Output: 22
  console.log(grade);// Output: 'A'
  
