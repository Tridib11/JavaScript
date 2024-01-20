const express = require("express");
const {handleGetAllUsers,handleGetUserById,handlePatchRequestById,handleDeleteUserById,handlePostUserById}=require('../Controllers/user')
const router=express.Router();

//Rest api
router.route("/").get(handleGetAllUsers).post(handlePostUserById)


router.route("/:id")

//routes 

  .get(handleGetUserById)
  .patch(handlePatchRequestById)
  .delete(handleDeleteUserById);
  
  
  
  module.exports=router




  // router.get("/users", async(req, res) => {
    //     const allDbUSers=await User.find({})
    //     const html = `
    //       <ul>
    //           ${allDbUSers.map((user) => `<li>${user.firstName} - ${user.email} - ID : ${user.id}</li>`).join("")}
    //       </ul>
    //       `;
    //     res.send(html);
    //   });
  
    
    // return res.json({status:"Success"})
    
    
      // const id = Number(req.params.id);
      // const changes = req.body;
  
      // const userIdx = users.findIndex((user) => user.id === id);
  
      // if (userIdx >= 0) {
      //   const updatedUser = { ...users[userIdx], ...changes };
      //   updatedUser.id = id;
      //   users[userIdx] = updatedUser;
  
      //   fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      //     return res.json({
      //       status: "Success",
      //       updatedUser,
      //     });
      //   });
      // } else {
      //   return res.status(404).json({
        //     status: "error",
        //     message: "User not found",
        //   });
      // }
    
  
  
  
      // const id = Number(req.params.id);
      // const userIdx = users.findIndex((user) => user.id === id);
      // if (userIdx >= 0) {
        //   const delUser = users.splice(userIdx, 1)[0];
        //   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
          //     return res.json({
            //       status: "success",
      //       delUser,
      //     });
      //   });
      // } else {
      //   return res.status(404).json({
        //     status: "error",
        //     message: "User not found",
        //   });
        // }
        
        // users.push({ id: users.length + 1, ...body });
        // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        //   if (err) {
        //     return res.json({
        //       "user-id": err,
        //       Status: "Failed",
        //     });
        //   }
        //   return res.json({
        //     "User-id": users.length,
        //     Status: "Success",
        //   });
        // });
        