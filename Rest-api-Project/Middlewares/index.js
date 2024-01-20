const fs = require("fs");
function logReqRes(filename){
    return (req,res,next)=>{
        fs.appendFile(filename,`\nIP ${req.ip}, ${Date.now()}, ${req.method}, ${req.path}`
        ,(err,data)=>{
            next()
        })  
    }
}
module.exports={
    logReqRes,
}