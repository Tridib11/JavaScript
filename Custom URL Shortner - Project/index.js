const express=require("express")
const {connectToMongoDB}=require("./connect")
const urlRoute=require('./routes/url')
const app = express()
const port =8001
const URL=require("./models/url")

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log("MongoDB connected"))
app.use(express.json())
app.use("/url",urlRoute)
app.get("/:shortId",async(req,res)=>{
    const shortId=req.params.shortId
    const entry=await URL.findOneAndUpdate({
        shortId,
    },{
        $push:{
            visitHistory:{
                timestamp:Date.now(),
            },
        }
    })
    res.redirect(entry.redirectUrl)

})
app.listen(port,()=>{
    console.log(`Server started ar ${port}`);
})