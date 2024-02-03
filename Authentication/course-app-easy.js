const express=require("express")
const app=express()
app.use(express.json())

let ADMINS=[];
let USERS=[];
let COURSES=[];

const adminAuthentication=(req,res,next)=>{
    const {username,password}=req.headers

    const admin=ADMIN.find(a=>a.username===username && a.password===password)
    if(admin){
        next()
    }else{
        res.status(403).json({message:"Admin authentication falied"})
    }
}
