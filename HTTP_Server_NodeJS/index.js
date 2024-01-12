const http=require("http")
const myServer=http.createServer((req,res)=>{
    // console.log("New Req Rec.");
    console.log(req);
    res.end("Hello from Node JS server")
})
myServer.listen(8000,()=>console.log("Server started"))
