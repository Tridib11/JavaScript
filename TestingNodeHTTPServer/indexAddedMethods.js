const http=require('http')
const fs=require('fs')
const url=require('url')

const myServer=http.createServer((req,res)=>{
    if(req.url=="/favicon.ico") return
    const myUrl=url.parse(req.url,true)
    const username=myUrl.query.myname;
    const id=myUrl.query.id
    const search=myUrl.query.search
    console.log(myUrl);
    var logs=` Request type : ${req.method},Username : ${username}, Id : ${id}, Searched : ${search} \n`
    fs.appendFile("./logs.txt",logs,(err,data)=>{
        switch(myUrl.pathname){
            case '/' : if(req.method==='GET') res.end(`Homepage ${req.method}`)
            break
            case '/about' : if(req.method==='GET') res.end(`Hey ${username}, Id : ${id}, Searched ${search} ,Method ${req.method}} `)
            break
            case '/Signup': 
            if(req.method==='GET') res.end("This is a signup form")
            else if(req.method==='POST'){
                //DB Query
                res.end("Successfull")
            }
            break
            case '/results': 
            const search=myUrl.query.search_query
            logs=`Youtube url Search:Here are your results for ${search} \n`
            fs.appendFile("./logs.txt",logs,(err,data)=>{})
            res.end(`Here are your results for ${search}`)
            break;
            default : res.end("404 Not Found")
        }
    })
})

myServer.listen(8000,(err,data)=>{
    console.log("Server started");
})