function readcallback(err,data){
    if(err){
        throw err;
    }
    ans[0]=data;  
}
function parallelFileOperation(){

    readFile('a.txt','utf-8',readcallback);
    writeFile('b.txt','Hello','utf-8',writecallback);

} 