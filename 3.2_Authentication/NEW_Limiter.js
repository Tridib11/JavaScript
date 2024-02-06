/*

You have been given an express server which has a few endpoints.
Your task is to create a global middleware (app.use) which will
rate limit the requests from a user to only 5 request per second
If a user sends more than 5 requests in a single second, the server
should block them with a 404.
User wilt be sending in their user idlin the header as •user-id'
You have been given a numberOfRequestsForUser object to start off with which
clears every one second
*/

const express = require("express");
const app = express();

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

function rateLimitCount(req, res, next) {
  const userId = req.headers["user-id"];
  if (numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] += 1;
    if (numberOfRequestsForUser[userId] > 5) {
      res.status(404).send("No entry");
    } else {
      next();
    }
  } else {
    numberOfRequestsForUser[userId] = 1;
    next();
  }
}

app.get("/user", rateLimitCount, (req, res) => {
    // throw new Error("Some error")
    res.status(200).json({ name: "John" });
});

app.use((err,req,res,next)=>{
    res.status(404).send({})
    errorCount+=1;
})

app.listen(3000, () => {
  console.log("3000");
});

