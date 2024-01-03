//.Arrow Functions
//.Higher Order Functions

// Normal Function
function abc(){
    console.log("This is a normal function")
}
abc()

//Arrow Function
const xyz = () =>{
    return (
        console.log("This is an Arrow Function")
    )
}

xyz()

//Write an arrow function called add that takes two parameters, a and b, and returns their sum.

const add=(a,b)=>{
    return a+b;
}

console.log(add(4,5));

//Write an arrow function called isEven that takes a number as a parameter and returns true if the number is even, and false otherwise.

const isEven = (num) =>{
    if (num%2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(6));

//Write an arrow function called multiplyByTwo that 
//takes an array of numbers as a parameter and returns a new array where each number is multiplied by 2.

const multiplyByTwo = (nums) =>{
    return nums.map((num)=>{
     return num * 2
    })
}

console.log(multiplyByTwo([1,2,3,4,5,6,7]));

// Higher Order Functions
// A function which takes another function as an argument 
// or returns a function from it is known as the higher order function.

function x(){
    console.log("namste")
}
function y(x){
    x();
}

// const radius = [3,8,4,9]

// const calArea = function(radius){           //Area
//     const output = []
//     for (i = 0; i<radius.length; i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }

// console.log(calArea(radius));

// const calCircum = function(radius){         //Circumference
//     const output = []
//     for (i = 0; i<radius.length; i++){
//         output.push(2*(Math.PI*radius[i]));
//     }
//     return output;
// }

// console.log(calCircum(radius));


// const calDiameter = function(radius){         //Diameter
//     const output = []
//     for (i = 0; i<radius.length; i++){
//         output.push(2*radius[i]);
//     }
//     return output;
// }

// console.log(calDiameter(radius));



const radius = [3,8,4,9]
const area = function(radius){
    return Math.PI*radius*radius
}
const circumference = function(radius){
    return 2*Math.PI*radius
}
const diameter = function(radius){
    return 2*radius
}

const calculate = function(radius,logic){
    const output = [];
    for (i = 0; i< radius.length; i++){
        output.push(logic(radius[i]));
    }  
    return output;  
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));