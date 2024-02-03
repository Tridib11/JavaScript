const express=require("express")
const app=express()
app.use(express.json())

let ADMINS=[];
let USERS=[];
let COURSES=[];

const adminAuthentication=(req,res,next)=>{
    
}