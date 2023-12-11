// function is a block of code where it can perform a specified task

//basic function 
function add(a,b){
    console.log(a+b);
}
add(1,2);

//same function with return value
function addreturn(a,b){
    return a+b
}
let result=addreturn(2,2);
console.log(result);

// function  expresiion creating anonymous function and assigning to a variable

let sum = function(a,b){
    console.log(a+b);
}
sum(3,2);

//arrow functions it is from ES6
 let addition=(a,b)=>{
      console.log(a+b)
 }
 addition(5,5);