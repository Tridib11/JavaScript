const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
//Middleware for parsing the bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
