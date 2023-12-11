//Arrays : It is used to store the multiple values with different data types  in a single variable 

//some predefined functions:
//shift()    : which is used to delete the data at starting  of the array
// unshift() : which is used to add the data at the starting of the array
// push()    :  which is used to add the data at the end of the array
//pop()      : which is used to delete the data at ending  of the array


let values=[1,2,3,4,5,"sai",true ,{laptop:"lenovo"},()=>{
    console.log('hello world')
}];
  console.log(values) // array
  console.log(values.length) // array length
  console.log(values[0]) //1
  console.log(values.indexOf(true)) //1

  values[8]() //calling a function 


// examples for predefined  func

//   shift()
let arr=[1,2,3,4]
  arr.shift()
  console.log(arr ,"after shift")  // [2,3,4]

// unshift()  
arr.unshift(54);
console.log(arr,"after unshift") //[54,2,3,4]

//pop()
console.log(arr)
arr.pop();
console.log(arr,"after pop") //[54,2,3]

//push()
console.log(arr)
arr.push(80);
console.log(arr,"after push") //[54,2,3,80]



