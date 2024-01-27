const express = require("express");
const errorHandler = require("./middleware/errorHandle");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config()
const app = express();
const port = process.env.PORT || 5001;

connectDb()
 
app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});
