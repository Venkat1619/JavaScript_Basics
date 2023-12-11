// let arr=[1,2,3,4,5,6]
// let [a,b,,d]=arr
// console.log(arr);
// console.log(d)


//map()    : map method transforms each element of an array and creates a new array with the transformed values,
//filter() : filter method creates a new array when it meets the specific condition,
//reduce() : It reduces the all the elements in an array into single element
// all the three contains of call back function
//call back function : Passing a function as an argument to another function 

//filter
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

//map
const multiplication = numbers.map((num) => {
    return num * 2;
});
console.log(multiplication); //[2,4,,6,8,10]

//reduce 
const sum = numbers.reduce((a, b) => {
    return a + b;
});
console.log(sum); // 15

//example with all the three
let result =numbers.filter((num)=> num % 2 === 0).map((num)=>  num*2).reduce((a,b)=> {return a+b})
console.log(result)//12