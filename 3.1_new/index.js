const express=require("express")

const app=express()

app.get("/health-checkup",(req,res)=>{
  const username=req.headers.username;
  const password=req.headers.password;
  const kidneyId=req.query.kidneyId;
  if(username!="tridib" || password!="pass"){
    res.status(401).send({"msg":"Somethings up with your inputs"})   
    }
  if(kidneyId!=1 && kidneyId!=2){
    res.status(401).send({"msg":"Somethings up with your inputs"})   
  }
    res.json({
      msg:"Your kidney is fine"
    })
})

app.listen(3000)
        
