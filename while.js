// while Loop :  It will loop the code till it satisfy the condition 
 // 3 things : initilization, condition, increment

 function dowhileEx(){
    let i=1;
 do{
    console.log(i)
    console.log('hello');
        i++
 }
    while(i<=5){
        
    }
 }
 dowhileEx(); // it will print  hello 5 times

 function even(){
     let num = 10;
     let i=1
     while( i<=num){
         
        if(i%2==0){
            console.log(`even numbers ${i}`);
            i++;
        }
        else{
            console.log(`odd numbers ${i}`);
            i++
        }
     }
    
 }
 even()

//for loop : same as while but initilization, condition, increment in a single line
 function evenNum(){
    let num = 10;
    
    for(let i=1; i<=num;i++){
        
       if(i%2==0){
           console.log(`even numbers ${i}`);
           
       }
       else{
           console.log(`odd numbers ${i}`);
        
       }
    }
   
}
evenNum()