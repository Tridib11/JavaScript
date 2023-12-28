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
    let answer=calculateSum(100)
    res.send(`The calculated sum is ${answer}`)
}
app.get('/',test)

function portTesting(){
    console.log(`Listning on port ${port}`);
}

app.listen(port,portTesting)