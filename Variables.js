//1-
// var n = 2;
// function square (num){
//     var ans = num*num;
//     return ans
// } 

// var square1 = square(n);
// var square2 = square(4);
// console.log(square1);
// console.log(square2);

//Variables in Js 
// var,let,const

//2-
// var x = 7;
// function getName(){
//     console.log("Namaste Javascript")
// }
// getName();
// console.log(x);

//3-
// getName();
// console.log(x);
// var x = 7;
// function getName(){
//     console.log("Namaste Javascript")
// }

// console.log(getName);

//4-
// console.log(x);
// var x = 7;
// const getname = function getName(){
//     console.log("Namaste Javascript")
// }

// console.log(getname);

//5-
// var x = 1;
// a();
// b();

// function a (){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);
// }

// console.log(x);

//6-
// function a(){
//     var x = 10;
//     // console.log(x);
//     c();
//     function c(){
//         console.log(x);
//     }
// }
// a();

// let and const declartions are hoisted but they are in the temporial dead zone for the time being.
//means it is in Script object rather than in Global object so we cannot access it before initialization. 

// a();
// function a(){
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
// }

console.log(a); // What will this output? --- undefined
var a = 10;
console.log(a); // What will this output? --- 10  


console.log(b); // What will this output? --- Reference Error       
let b = 20;
console.log(b); // What will this output? --- 20


console.log(c); // What will this output? --- Reference Error   
const c = 30;
console.log(c); // What will this output? --- 30


console.log(d); // What will this output? --- undefined
if (true) {
  var d = 40;
}
console.log(d); // What will this output? --- 40


console.log(e); // What will this output? --- Reference error   
if (true) {
  let e = 50;
}
console.log(e); // What will this output? --- undefined


console.log(f); // What will this output? --- Reference Error 
if (true) {
  const f = 60;
}
console.log(f); // What will this output? --- Undefined


