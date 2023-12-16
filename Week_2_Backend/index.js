//creating HTTP Server
const express = require('express')
const app = express()
const port = 3000

function sum(counter){
    var sum=0;
    for(var i=0;i<=counter;i++){
        sum+=i;
    }
    return sum;
}

function handleFirstRequest(req,res){
    var counter=req.query.counter;//query counter
    var calsulatedSum=sum(counter);//query counter
    console.log(calsulatedSum);
    var answer="The sum is "+calsulatedSum;
    res.send(answer);
}
app.get('/handleSum', handleFirstRequest)

function started(){
    console.log("Example app listening on port "+port);
}
app.listen(port, started)















// const fs=require("fs");
// const express=require("express");
// function callbackFn(err,data){
//     console.log(data);
// }
// fs.readFile("a.txt","utf-8",callbackFn);










