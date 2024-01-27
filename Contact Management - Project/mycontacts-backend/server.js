const express = require("express");
const errorHandler = require("./middleware/errorHandle");
// const dotenv=require("dotenv").config()
const app = express();
const port = 5000;

app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});
