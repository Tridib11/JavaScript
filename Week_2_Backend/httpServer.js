const express=require('express')
const app=express()
const port =3000

function sum(counter){
    var sum=0;
    for(var i=0;i<=counter;i++){
        sum+=i;
    }
    return sum;
}

function handleSumRequest(req,res){
    var counter=req.query.counter;
    var calculatedSum=sum(counter);
    res.send("The calculated sum is "+ calculatedSum);
}
function started(){
    console.log("The HTTP server has started ");
}

app.get('/handleSum',handleSumRequest)
app.listen(port,started);
