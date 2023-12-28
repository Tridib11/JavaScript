const express=require("express")
const app=express()
const port=3000
function calculateSum(num){
    sum=0
    for(let i=0;i<=num;i++){
        sum+=i;
    }
    return sum;
}

function test(req,res){
    var counter=req.query.counterh;
    // let answer=calculateSum(100)
    var answer=calculateSum(counter)
    res.send(`The calculated sum is ${answer}`)
}
app.get('/',test)

function portTesting(){
    console.log(`Listning on port ${port}`);
}

app.listen(port,portTesting)