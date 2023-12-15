// const fs =require('fs')
// function callBack(err,data){
//     console.log(data);
// }
// fs.readFile('js.txt','utf8',callBack)

const fs= require('fs').promises;

function callBack(data){
    console.log(data);
}

fs.readFile('js.txt','utf8').then(callBack)