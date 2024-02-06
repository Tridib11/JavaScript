const express = require("express")
const app = express()
let requestCount = 0;

/*

You have been given an express server which has
a few endpoints.
Your task is to create a global middleware (app.use) which will
maintain a count of the number of requests made
to the server in the global
requestC0LRt variable

*/

function rateLimitCount(req,res,next){
    requestCount+=1
    next()
}

app.get('/user',rateLimitCount, (req, res) => {
    res.status(200).json({ name: "John" })
})
app.post('/user',rateLimitCount, (req, res) => {
    res.status(200).json({ msg: "Created Dummy user" })
})
app.get('/requestCount', (req, res) => {
    res.status(200).json({ requestCount })
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})