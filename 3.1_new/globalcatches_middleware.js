const express = require("express");
const app = express();

app.use(express.json());
app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send("Your kidney length is " + kidneyLength);
});



//global catches

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
