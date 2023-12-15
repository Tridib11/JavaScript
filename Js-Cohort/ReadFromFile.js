const fs=require('fs');
const filePath="js.txt";
fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data);
});