const fs=require('fs')
function readFile(filename,callback){
    fs.readFile(filename,'utf-8',callback);
}
function printText(err,data){
    if(err){
        console.log("cant read from the dam file :(");
    }else{
        console.log(data);
    }
}
readFile('js.txt',printText)