const fs=require('fs');
const file="/workspaces/JavaScript/Cohort/filewritetesting.txt";
function write_To_File(err,data){
    if(err){
        console.log("Cannot Write to the file")
    }
    else{
        console.log("File has been succesfully written")
    }
}
let data="Hey so we have wrote to the file successfully"
fs.writeFile(file,data,'utf8',write_To_File)