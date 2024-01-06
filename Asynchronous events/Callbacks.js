//What is a Callback function in Javascript?
//When u call a function and you pass inside another function is known as a callback function.
// example1:
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
})
//example2:
setTimeout(function(){
    console.log("timer");
},5000)
