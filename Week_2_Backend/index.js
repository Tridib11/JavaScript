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
function mul(counter){
    var answer=1;
    for(var i=1;i<=counter;i++){
        answer*=i;
    }
    return answer;
}

  //returning HTML from server

  function givePage(req,res){
    res.send(`
    <head>
        <title>
            hello from page
        </title>
    </head>

    <body>
        <b><h1>hi there</h1></b>
    </body>
    `)
    // var obj={
    //     "hey":"kdhfkdsf"
    // }
    // res.send(obj)
  }




function handleFirstRequest(req,res){



    //json : Javascript Object Notation 
    //returning json from server 
    // var counter=req.body.counter;
    // var calculatedsum=sum(counter);
    // var calculatedmul=mul(counter);
    // var answerObject={
    //     sum:calculatedsum,
    //     mul:calculatedmul
    // }
    // res.status(200).send(answerObject)



    //changing status codes


    // var counter=req.body.counter;
    // if(counter<100000){
    //     var calculatedsum=sum(counter);
    //     var answer="The sum is "+calculatedsum;
    //     res.send(answer);
    // }else{
    //     res.status(411).send("You have sent a big number")
    // }



    // //for body parsing

    // console.log(req.body)//for body parsing
    // var counter1=req.body.counter;//for body parsing
    // var calculatedsum=sum(counter1);//for body parsing
    // var answer="The sum is "+calculatedsum;//for body parsing
    // res.send(answer)//for body parsing
 
 
 
 
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


//routes



// app.get('/handleSum', handleFirstRequest)
app.post('/createuser',handleFirstRequest)
//app.put('/modifyuser',modify)
//app.delete('/deleteuser',deleteCheck)
app.get('/',givePage);




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