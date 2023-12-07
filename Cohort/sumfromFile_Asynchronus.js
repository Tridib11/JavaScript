const fs = require('fs');
fs.readFile("js.txt",'utf-8',sendReadTexts);
function sendReadTexts(err,data){
    sum(data);
    console.log("File is read");
}
function sum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    } 
    console.log(sum);
}
console.log("1st");
console.log("2");
console.log("3");
