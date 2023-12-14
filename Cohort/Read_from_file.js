const fs=require('fs')
const filePath="js.txt";
function printFileContents(err,data){
    if(err){
        console.log("cant read from the dam file :(");
    }else{
        console.log(data);
    }
}
fs.readFile(filePath,'utf8',printFileContents);