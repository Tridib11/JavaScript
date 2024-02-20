const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    message: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    // Implement course creation logic
    const { title, description, imageLink, price } = req.body;
    const newCourse = await Course.create({
      title,
      description,
      imageLink,
      price,
    });
    res.status(201).json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the course" });
  }
});

router.get("/courses", adminMiddleware, async(req, res) => {
  // Implement fetching all courses logic
    const response=await Course.find({})
    res.json({
        courses:response
    })
});

module.exports = router;
