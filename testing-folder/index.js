const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) {
    next();
  } else {
    res.status(403).json({ message: "Admin authentication successfully" });
  }
};

const userAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    (a) => a.username === username && a.password === password
  );
  if (user) {
    req.user = user;
    next();
  } else {
    res.statuc(403).json({ message: "User Authntication Falied" });
  }
};
// Admin routes
app.post("/admin/signup", (req, res) => {
  const admin = req.body;
  const existingAdmin = ADMINS.find((a) => a.username === admin.username);
  if (existingAdmin) {
    res.status(403).json({ message: "Admin already exists" });
  } else {
    ADMINS.push(admin);
    res.json("Admin created successfully");
  }
});

app.post("/admin/login", adminAuthentication, (req, res) => {
  res.json({ message: "Logged in Successfully" });
});

app.post("/admin/courses", (req, res) => {
  const course = req.body;
  course.id = Date.now();
  course.published = false;
  COURSES.push(course);
  res.json({ message: "Course created Successfully", courseId: course.id });
});

app.put("/admin/courses/:courseId", (req, res) => {
  const courseid = parseInt(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseid);
  if (course) {
    Object.assign(course, req.body);
    res.json({ message: "Course updated Successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/admin/courses", (req, res) => {
  res.json({ courses: COURSES });
});

// User routes
app.post("/users/signup", (req, res) => {
  const user = { ...req.body, purchasedCourses: [] };
  USERS.push(user);
  res.json({ message: "User Created Successfully" });
});

app.post("/users/login", userAuthentication, (req, res) => {
  res.json({ message: "Logged in Successfully" });
});

app.get("/users/courses", (req, res) => {
  res.json({ Courses: COURSES.filter((c) => c.published) });
});

app.post("/users/courses/:courseId", userAuthentication, (req, res) => {
  const courseId = Number(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseId && c.published);
  if (course) {
    req.user.purchasedCourses.push(courseId);
    res.json({ message: "Course Bought Successfully" });
  } else {
    res.status(403).json({ message: "Course not found or not available" });
  }
});

app.get("/users/purchasedCourses", userAuthentication, (req, res) => {
  const purchasedCourses = COURSES.filter((c) =>
    req.user.purchasedCourses.includes(c.id)
  );

  res.json({ purchasedCourses });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
