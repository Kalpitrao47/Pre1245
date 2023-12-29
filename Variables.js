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
function a(){
    var x = 10;
    // console.log(x);
    c();
    function c(){
        console.log(x);
    }
}

a();