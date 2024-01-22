const express=require("express")
const {connectToMongoDB}=require("./connect")
const urlRoute=require('./routes/url')
const app = express()
const port =8001
const URL=require("./models/url")

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log("MongoDB connected"))
app.use(express.json())

app.use("/",urlRoute)


app.listen(port,()=>{
    console.log(`Server started ar ${port}`);
})