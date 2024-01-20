const mongoose=require("mongoose")

async function connectMongoDB(url){
    return mongoose.connect(url)
    .then(()=>console.log("Mongodb Connected"))
    .catch((err)=>console.log("Connection error to MongoDB",err))
}
module.exports={
    connectMongoDB,
}