const fs=require("fs")

// fs.readFile("a.txt","utf-8",function callback(err,data){
//     console.log(data);
// })


//arrow function

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
})