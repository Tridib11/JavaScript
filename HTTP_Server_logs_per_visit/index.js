const http=require('http')
const fs=require('fs')
const myServer=http.createServer((req,res)=>{
    const logs=`${Date.now()}: ${req.url} New Req Received \n`
    fs.appendFile("log.txt",logs,(err,data)=>{
        switch(req.url){
            case '/': res.end("HomePage")
            break
            case '/about':res.end("I am Tridib")
            break
            default:res.end("404 NOT FOUND")
        }        
    })
})
myServer.listen(8000,()=>{
    console.log("Server started");
})



