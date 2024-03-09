const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication=(req,res,next)=>{
    const {username,password}=req.headers;
    const admin=ADMINS.find(a=>a.username===username && a.password===password)
    if(admin){
        next()
    }else{
        res.status(403).json({message:'Admin authentication successfully'})
    }
}

const userAuthentication=(req,res,next)=>{
    const {username,password}=req.headers;
    const user=USERS.find(a=>a.username===username && a.password===password)
    if(user){
        req.user=user
         next()
    }else{
        res.statuc(403).json({message:"User Authntication Falied"})
    }
}
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

app.post("/admin/login",adminAuthentication, (req, res) => {
  res.json({ message: "Logged in Successfully" });
});

app.post("/admin/courses", (req, res) => {
  const course=req.body
  course.id=Date.now()
  COURSES.push(course)
  res.json({message:"Course created Successfully",courseId:course.id})
});

app.put("/admin/courses/:courseId", (req, res) => {
  const courseid=parseInt(req.params.courseId)
  const course=COURSES.find(c=>c.id===courseid)
  if(course){
    Object.assign(course,req.body)
    res.json({message:"Course updated Successfully"})
  }else{
    res.status(404).json({message:"Course not found"})
  }
});

app.get("/admin/courses", (req, res) => {
  res.json({courses:COURSES})
});

// User routes
app.post("/users/signup", (req, res) => {
  const user={...req.body,purchasedCourses:[]}
  USERS.push(user)
  res.json({message:"User Created Successfully"})
});

app.post("/users/login", (req, res) => {
  // logic to log in user
});

app.get("/users/courses", (req, res) => {
  // logic to list all courses
});

app.post("/users/courses/:courseId", (req, res) => {
  // logic to purchase a course
});

app.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.listen(8000,()=>{
    console.log("Server started")
})
