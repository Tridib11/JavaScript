const express=require("express")
const app=express()

function userMiddleware(req,res,next){
  const userName=req.headers.username;
  const password=req.headers.password;
  if(userName!="tridib" && password!="pass"){
    res.status(403).json({
      msg:"Incorrect inputs"
    })
  }else{
    next()
  }
}

function kidneyMiddleware(req,res,next){
  const kidneyid=req.query.kidneyid;
  if(kidneyid!=1 && kidneyid!=2){
    res.status(403).json({
      msg:"lol"
    })
  }else{
    next()
  }
}

app.get("/health-checkup",userMiddleware,kidneyMiddleware,(req,res)=>{
  res.send("Your heart is healthy")
})

app.get("/kidney-check",userMiddleware,kidneyMiddleware,(req,res)=>{
  res.send("Your kidney is healthy")
})

// app.get("/heart-check",userMiddleware,heartMiddleware,(req,res)=>{
//   res.send("Your heart is healthy")
// })
app.listen(3000)