const express = require("express");
const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "You are not old enough to book a ride",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You have successfully booked a ride 1",
  });
});

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You have successfully booked a ride 2",
  });
});

app.listen(3000);
