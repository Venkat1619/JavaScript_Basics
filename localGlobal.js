//Global variables: A variable which is declared outside the function and it is accessable anywhere .
/*Local variables : A variable which is declared inside the function and 
it is accessable inside the function only not in outside  .*/

let user='sai';  //global variable

function name(){
    let uName='venkat';  //local Variable
    console.log(`${uName} ${user}` ) 
    //  ans :: sai venkat   because it can access inside 
}
console.log(user) //sai
console.log(uName) 
// Error : uName is not defined  because it can nopt access outside
