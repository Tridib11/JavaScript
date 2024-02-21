const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async(req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  await User.create({
    username,
    password,
  });
  res.json({
    msg: "User created Successfully",
  });
});

router.post("/signin", async(req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  const userfind = await User.findOne({
    username,
    password,
  });
  if (userfind) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json(token);
  } else {
    res.status(503).json({
      msg: "Incorrect email and password",
    });
  }
});

router.get("/courses", async(req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});


router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;
  const user = await User.findOne({ username });
  if (user.purchasedCourses.includes(courseId)) {
    return res
      .status(400)
      .json({ msg: "You already have purchased the course" });
  } else {
    await User.updateOne(
      { username },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
  }

  res.json({
    msg: "Purchase Complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async(req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });
  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
