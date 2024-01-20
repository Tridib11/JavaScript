const User=require('../Models/user')

async function handleGetAllUsers(req,res){
    const allDbUSers=await User.find({})
     return res.json(allDbUSers);
}

async function handleGetUserById(req,res){
    const user=await User.findById(req.params.id)
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({msg : `User with ${id} is unavailabe`})
    return res.json(user);
}

async function handlePatchRequestById(req,res){
    const body = req.body;
    await User.findByIdAndUpdate(req.params.id,{
      firstName:body.first_name,
      lastName:body.last_name,
      email:body.email,
      gender:body.gender,
      jobTitle:body.job_title
    })
    return res.status(201).json({msg:"Successs"})
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({Status:"Success"})
}

async function handlePostUserById(req,res){
    const body = req.body;
  if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
      res.status(400).json({msg:`All fields are required`})
  }
  
  //mongodb
  await User.create({
    firstName:body.first_name,
    lastName:body.last_name,
    email:body.email,
    gender:body.gender,
    jobTitle:body.job_title
    
  })  
  return res.status(201).json({msg:"Successs"})
}

module.exports={
    handleGetAllUsers,
    handleGetUserById,
    handlePatchRequestById,
    handleDeleteUserById,
    handlePostUserById
}

