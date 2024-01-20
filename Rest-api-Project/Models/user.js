const mongoose=require("mongoose")

//Schema
const userSchema=new mongoose.Schema({
    firstName:{
      type:String,
      required:false,
    },
    lastName:{
      type:String,
      required:false,
    },
    gender:{
      type:String,
      required:true,
    },
    email:{
      type:String,
      required:true,
      unique:true,
    },
    jobTitle:{
      type:String,
    },
  },{timestamps:true}
  )

  const User=mongoose.model("user",userSchema)

  module.exports=User