const express=require("express")
const app=express()
var bodyParser=require('body-parser')
const port=3000

let numberOfRequests=0;

//applying middleware

function middleware(req,res,next){
    // console.log("From inside middleware "+req.headers.counterh);
    numberOfRequests+=1
    // console.log("Requests "+numberOfRequests);
    // res.send("Error from middlware")
    next()
}

// app.use(middleware)
app.use(bodyParser.json())// bod parser middleware

function calculateSum(num){
    sum=0
    for(let i=0;i<=num;i++){
        sum+=i;
    }
    return sum;
}

function test(req,res){
    // console.log(req.body);
    // // console.log(req.headers);
    // var counter=req.headers.counterh;
    // // let answer=calculateSum(100)
    // var answer=calculateSum(counter)
    // res.send(`The calculated sum is ${answer}`)





    var counter=req.query.counter
    var calculatedSum=calculateSum(counter)
    var answerObject={
        sum:calculatedSum
    }
    res.send(answerObject)
}
app.get('/',test)
// app.post('/',test)
function portTesting(){
    console.log(`Listning on port ${port}`);
}

app.listen(port,portTesting)