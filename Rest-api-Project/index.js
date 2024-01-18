const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");
const port = 8000;

//Middleware - plugin
app.use(express.urlencoded({ extended: false }));

// custom- midlewares

app.use((req,res,next)=>{
    fs.appendFile("log.txt",`\nIP ${req.ip}, ${Date.now()},  ${req.method},  ${req.path}`,(err,data)=>{
        next()
    })
    
})

/*Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option */

//routes

app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.id} ${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

//Rest api

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")

  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })

  .patch((req, res) => {
    const id = Number(req.params.id);
    const changes = req.body;

    const userIdx = users.findIndex((user) => user.id === id);

    if (userIdx >= 0) {
      const updatedUser = { ...users[userIdx], ...changes };
      updatedUser.id = id;
      users[userIdx] = updatedUser;

      fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({
          status: "Success",
          updatedUser,
        });
      });
    } else {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
  })

  .delete((req, res) => {
    const id = Number(req.params.id);
    const userIdx = users.findIndex((user) => user.id === id);
    if (userIdx >= 0) {
      const delUser = users.splice(userIdx, 1)[0];
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({
          status: "success",
          delUser,
        });
      });
    } else {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
      res.status(400).json({msg:`All fields are required`})
  }
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    if (err) {
      return res.json({
        "user-id": err,
        Status: "Failed",
      });
    }
    return res.json({
      "User-id": users.length,
      Status: "Success",
    });
  });
});

app.listen(port, () => {
  console.log(`Server started at PORT:${port}`);
});

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
