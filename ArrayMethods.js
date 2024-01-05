//map,filter and reduce are higher order functions in javascript
///map --- map function is basically used to transform an array.
const arr = [5,1,3,2,6]
//Double - [10,2,6,4,12]
//Triple - [15,3,9,6,18]
//Binary - ["101","1","11","10","110"]
//Method 1
function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

 const output = arr.map(double);
 const output2 = arr.map(triple);
 console.log(output);
 console.log(output2);



 //Method 2    ------ Function
 const output3 = arr.map(function triple(x){
    return x*3;
}) 
console.log(output3)


//Method 3     -------Arrow Function
const output4 = arr.map((x)=>{
    return x*3;
}) 
console.log(output4)





///filter ----filter function is used to filter the values inside an array.
// Method1   
function odd(x){
    return x%2;
}
function even(x){
    return x%2 === 0;
}
const filterr1 = arr.filter(odd);
const filterr2 = arr.filter(even);
console.log(filterr1);
console.log(filterr2);


//Method 3 ----Arrow function
const filterr = arr.filter((x)=>{
    return x%3 === 0;
})

console.log(filterr);