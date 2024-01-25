const express=require("express")
const app=express()
const path=require("path")
const port =8001
const urlRoute=require("./routes/url")
const {connectToMongodb}=require("./connect")
const staticroute=require("./routes/staticroute")

connectToMongodb('mongodb://127.0.0.1:27017/nshort').then(()=>{
    console.log("MongoDB connected");
})

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/home",staticroute)
app.use('/',urlRoute)


app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})

