let student=[
    {
        "id":1,
        "name":"venkat"
    },
    {
        "id":2,
        "name":"sai"
    }

]
let op= student.filter((item)=>{
    if(item.id>5){
        console.log('true')
    }
    else{
        console.log('false')
    }
})
// console.log(filters)