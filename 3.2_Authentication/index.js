const express=require("express")
const jwt=require("jsonwebtoken")
const app=express()

const allUsers=[
    {
        username:"tridib@mail.com",
        password:"123",
        name:"tridib",
    },
    {
        username:"raman@mail.com",
        password:"234",
        name:"raman",
    }
]
function userExists(username,password){
    
}

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})