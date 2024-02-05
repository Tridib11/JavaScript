/*
{
  email:string=>email
  password:atleast 8 characters
  country : "IN","US"
}
*/
const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json());

function validateInput(obj) {
  const schema2 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.union([zod.literal("IN"), zod.literal("US")]),
  });
  const response = schema2.safeParse(obj);
  console.log(response);
}

app.post("/login", (req, res) => {
  const response = validateInput(req.body);
  if (!response) {
    res.json({
      msg: "Your inputs are invalid",
    });
    return;
  }
});

// validateInput({
//   email:"ejeyd@example.com",
//   password:"12345678",
//   country:"IN"
// })
