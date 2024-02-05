const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const jwtPassword = "123456";

const allUsers = [
  {
    username: "tridib@mail.com",
    password: "123",
    name: "tridib",
  },
  {
    username: "raman@mail.com",
    password: "234",
    name: "raman",
  },
];
// function userExists(username, password) {
//   const userExists = false;
//   for (let i = 0; i < allUsers.length; i++) {
//     if (
//       allUsers[i].username === username &&
//       allUsers[i].password === password
//     ) {
//       userExists = true;
//     }
//   }
//   return userExists;
// }

//--or--

function userExists(username, password) {
    return allUsers.find(user => user.username === username && user.password === password);
  }
  

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!userExists) {
    return res.status(404).json({
      message: "User doesn't exists",
    });
  }
  var token = jwt.sign({ username: username }, jwtPassword); //encrypts the username
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
