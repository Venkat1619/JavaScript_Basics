let a=9;
let b=8;

if(a>b){
    console.log('a is greater');
}
else{
    console.log('b is greater')
}
// // (9>8), so a is greater




function day( num ){
    let day = num;
if(day==1){
    console.log('sunday');
}
else if(day==2){
    console.log('monday');
}
else if(day==3){
    console.log('tuesday');
}
else if(day==4){
    console.log('wednesday');
}
else if(day==5){
    console.log('thursday');
}
else if(day==6){
    console.log('friday');
}
else if(day==6){
    console.log('saturday');
}
else{
    console.log('please enter from 1 to 7 ')
}
}
day(0);


function switchday(num){
    switch(num){
        case 1 :  console.log('sunday');
                  break;
        case 2:   console.log('monday');
                   break;
        case 3:   console.log('tuesday');
                   break;
        case 4:   console.log('wednesday');
                   break;
        default:  console.log('enter from 1 - 4 ');
    }
}
switchday(5)