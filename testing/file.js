const fs=require('fs')
console.log("1");
//blocking
fs.writeFileSync("./contacts.txt","hey from a file")
//nonBlocking

fs.readFile("contacts.txt","utf-8",(err,data)=>{
    console.log(data)
})