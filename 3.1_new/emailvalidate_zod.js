const express = require("express");
const zod=require("zod");
const app = express();

app.use(express.json())


/*
{
  email:string=>email
  password:atleast 8 characters
  country : "IN","US"
}
*/

const schema2 = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  country: zod.union([zod.literal("IN"), zod.literal("US")])
});


const schema=zod.array(zod.number())


app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const resposne=schema.safeParse(kidneys)
  res.send({
    resposne
  })
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
