const mongoose=require("mongoose")
async function connectToMongodb(url){
    return mongoose.connect(url)
}

module.exports={
    connectToMongodb,
}