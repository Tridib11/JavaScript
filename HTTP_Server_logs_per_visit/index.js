const http=require('http')
const fs=require('fs')
const url=require('url')
const myServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end()
    const logs=`${Date.now()}: ${req.url} New Req Received \n`
    const myUrl=url.parse(req.url)
    console.log(myUrl);
    fs.appendFile("log.txt",logs,(err,data)=>{
        switch(myUrl.pathname){
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



