//creating HTTP Server
const express = require('express')
var bodyParser=require('body-parser') ///way to expract boddy
const app = express()
const port = 3000

let numOfRequests=0;

//Middlewares

app.use(bodyParser.json())///way to expract boddy

// function middleware1(req,res,next){
//     // console.log("From inside middleware "+ req.headers.counter)
//     // res.send("Error from inside middleware")
//     numOfRequests=numOfRequests+1;
//     console.log(numOfRequests);
//     next();
// }

// app.use(middleware1);

function sum(counter){
    var sum=0;
    for(var i=0;i<=counter;i++){
        sum+=i;
    }
    return sum;
}
function handleFirstRequest(req,res){
    //for body parsing

    console.log(req.body)//for body parsing
    var counter1=req.body.counter;//for body parsing
    var calculatedsum=sum(counter1);//for body parsing
    var answer="The sum is "+calculatedsum;//for body parsing
    res.send(answer)//for body parsing
 
 
 
 
    // console.log(req.body);
    // var counter1=req.body.
    // // numOfRequests=numOfRequests+1;  //line to check the number of requests passed
    // console.log(numOfRequests);
    // var counter=req.headers.counter;// header counter
    // // var counter=req.query.counter;//query counter
    // var calsulatedSum=sum(counter);
    // // console.log(calsulatedSum);
    // var answer="The sum is "+calsulatedSum;
    // res.send(answer);
}
function createUser(req,res){
    res.send("Just checking if the post working")
} 
function modify(req,res){
    res.send("Just checking if the put is working")
}
function deleteCheck(req,res){
    res.send("Just checking if the delete is working or not")
}
// app.get('/handleSum', handleFirstRequest)
app.post('/createuser',handleFirstRequest)
//app.put('/modifyuser',modify)
//app.delete('/deleteuser',deleteCheck)

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










