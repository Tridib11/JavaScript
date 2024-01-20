const express = require("express");
const userRouter=require("./Routes/user")
const {connectMongoDB}=require('./connection')
const app = express();
const fs = require("fs");
const {logReqRes}=require("./Middlewares/")
const port = 8000;

connectMongoDB("mongodb://127.0.0.1:27017/Project-1").then(()=>console.log("MONGODB CONNECTED"))
//Middleware - plugin
app.use(express.urlencoded({ extended: false })); //to view body

// custom- midlewares

app.use(logReqRes("log.txt"))
app.use("/api/user",userRouter)

app.listen(port, () => {
  console.log(`Server started at PORT:${port}`);
});




/*  REST OF THE THINGS ARE MOVED TO DIFFERNT FOLDERS MVC Pattern (Model View Controller)  */






// const users = require("./MOCK_DATA.json");


// const mongoose=require("mongoose")





//Connection to mongodb
// mongoose.connect("mongodb://127.0.0.1:27017/Project-1")
// .then(()=>console.log("Mongodb Connected"))
// .catch((err)=>console.log("COnnection error to MongoDB",err))


// //Schema
// const userSchema=new mongoose.Schema({
//   firstName:{
//     type:String,
//     required:false,
//   },
//   lastName:{
//     type:String,
//     required:false,
//   },
//   gender:{
//     type:String,
//     required:true,
//   },
//   email:{
//     type:String,
//     required:true,
//     unique:true,
//   },
//   jobTitle:{
//     type:String,
//   },
// },{timestamps:true}
// )


// const User=mongoose.model("user",userSchema)


/*Returns middleware that only parses urlencoded bodies and only looks at requests where 
the Content-Type header matches the type option */

// //routes

// app.get("/users", async(req, res) => {
//   const allDbUSers=await User.find({})
//   const html = `
//     <ul>
//         ${allDbUSers.map((user) => `<li>${user.firstName} - ${user.email} - ID : ${user.id}</li>`).join("")}
//     </ul>
//     `;
//   res.send(html);
// });

// //Rest api

// app.get("/api/users", async(req, res) => {
//   const allDbUSers=await User.find({})
//   return res.json(allDbUSers);
// });

// app.route("/api/users/:id")

//   .get(async(req, res) => {
//     const user=await User.findById(req.params.id)
//     // const id = Number(req.params.id);
//     // const user = users.find((user) => user.id === id);
//     if(!user) return res.status(404).json({msg : `User with ${id} is unavailabe`})
//     return res.json(user);
//   })

//   .patch(async(req, res) => {
//     const body = req.body;
//     await User.findByIdAndUpdate(req.params.id,{
//       firstName:body.first_name,
//       lastName:body.last_name,
//       email:body.email,
//       gender:body.gender,
//       jobTitle:body.job_title
//     })
//     return res.status(201).json({msg:"Successs"})
//   })
    
//     // return res.json({status:"Success"})


//     // const id = Number(req.params.id);
//     // const changes = req.body;

//     // const userIdx = users.findIndex((user) => user.id === id);

//     // if (userIdx >= 0) {
//     //   const updatedUser = { ...users[userIdx], ...changes };
//     //   updatedUser.id = id;
//     //   users[userIdx] = updatedUser;

//     //   fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     //     return res.json({
//     //       status: "Success",
//     //       updatedUser,
//     //     });
//     //   });
//     // } else {
//     //   return res.status(404).json({
//     //     status: "error",
//     //     message: "User not found",
//     //   });
//     // }
  

//   .delete(async(req, res) => {
//     await User.findByIdAndDelete(req.params.id)
//     return res.json({Status:"Success"})


//     // const id = Number(req.params.id);
//     // const userIdx = users.findIndex((user) => user.id === id);
//     // if (userIdx >= 0) {
//     //   const delUser = users.splice(userIdx, 1)[0];
//     //   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     //     return res.json({
//     //       status: "success",
//     //       delUser,
//     //     });
//     //   });
//     // } else {
//     //   return res.status(404).json({
//     //     status: "error",
//     //     message: "User not found",
//     //   });
//     // }
//   });

// app.post("/api/users", async(req, res) => {
//   const body = req.body;
//   if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
//       res.status(400).json({msg:`All fields are required`})
//   }
//   // users.push({ id: users.length + 1, ...body });
//   // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//   //   if (err) {
//   //     return res.json({
//   //       "user-id": err,
//   //       Status: "Failed",
//   //     });
//   //   }
//   //   return res.json({
//   //     "User-id": users.length,
//   //     Status: "Success",
//   //   });
//   // });


//   //mongodb
//   await User.create({
//     firstName:body.first_name,
//     lastName:body.last_name,
//     email:body.email,
//     gender:body.gender,
//     jobTitle:body.job_title

//   })

  // console.log(result);

//   return res.status(201).json({msg:"Successs"})

// });


/*
app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id)
    const user=users.find((user)=>user.id===id)
    return res.json(user)

})

app.post("/api/users",(req,res)=>{
    //TODO : Create new User
    return res.json({status : "pending"})
})

app.patch("/api/users/:id",(req,res)=>{
    //TODO : Edit the user with id
    return res.json({status : "pending"})
})

app.delete("/api/users/:id",(req,res)=>{
    //TODO : Delete the user with id
    return res.json({status : "pending"})
})

*/
