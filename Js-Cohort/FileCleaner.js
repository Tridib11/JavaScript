function clean(data){
    var arr=data.split(" ")
    var answerArray=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i].length===0){
            continue;
        }else{
            answerArray.push(arr[i]);
        }
    }
    var answerString=answerArray.join(" ")
    return answerString
}
//reading part
const fs=require('fs')
const file="cleaner.txt"
function readingfile(err,data){
    if(err){
        console.error(err)
        return;
    }
    let cleanData=clean(data);
    fs.writeFile(file,cleanData,'utf8',fileWritten);
}
fs.readFile(file,"utf8",readingfile)
function fileWritten(){
    console.log("Operation Successfull");
}
