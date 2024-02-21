const { Router } = require("express");
const { Admin, User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({
    username,
    password,
  });
  res.json({
    msg: "Admin created Successfully",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const adminfind = await Admin.findOne({
    username,
    password,
  });
  if (adminfind) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json(token);
  } else {
    res.status(503).json({
      msg: "Incorrect email and password",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    const { title, description, imageLink, price } = req.body;
    const newCourse = Course.create({
      title,
      description,
      imageLink,
      price,
    });
    res.status(201).json({
      message: "Course created successfully",
      courseID: newCourse._id,
    });
  } catch (e) {
    res
      .status(500)
      .json({ error: "An error occured while creating the Course" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;
