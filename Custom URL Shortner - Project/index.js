const express=require("express")
const {connectToMongoDB}=require("./connect")
const urlRoute=require('./routes/url')
const app = express()
const port =8001
const URL=require("./models/url")
const path=require("path")
const staticroute=require("./routes/staticRouter")

const userRoute=require('./routes/user')

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log("MongoDB connected"))

//setting up ejs
app.set("view engine","ejs")
app.set('views',path.resolve('./views'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",urlRoute)
app.use("/user",userRoute)

app.use("/home",staticroute)


app.listen(port,()=>{
    console.log(`Server started ar ${port}`);
})