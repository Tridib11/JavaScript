const fs=require("fs");
const express=require("express");
function callbackFn(err,data){
    console.log(data);
}
fs.readFile("a.txt","utf-8",callbackFn);










// function sum(counter){
//     var sum=0;
//     for(var i=0;i<counter;i++){
//         sum+=i;
//     }
//     return sum;
// }

// var calsulatedSum=sum(100);
// console.log(calsulatedSum);
