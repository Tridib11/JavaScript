const express = require("express");
const app = express();
const jwt=require("jsonwebtoken")

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const secretKey="sup3rs3cr3t1"
const generateJwt=(user)=>{
    const payload={username:user.username}
    return jwt.sign(payload,secretKey,{expiresIn:'1h'})
}
const authenticateJwt=(req,res,next)=>{
  const authHeader=req.headers.authorization
  if(authHeader){
    const token=authHeader.split(' ')[1]
    jwt.verify(token,secretKey,(err,user)=>{
      if(err){
        return res.sendStatus(403)
      }
      req.user=user
      next()
    })
  }else{
    res.sendStatus(401)
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
    const token = generateJwt(admin);
    res.status(200).json({ message: "Admin created successfully", token: token });
  }
});


app.post("/admin/login", (req, res) => {
    const{username,password}=req.headers;
    const admin=ADMINS.find(a=>a.username===username && a.password===password)
    if(admin){
        const token=generateJwt(admin)
        res.json({message:"Logged in successfully ",token})
    }else{
        res.status(403).json({message:'Admin authentication failed'})
    }
}); 

app.post("/admin/courses",authenticateJwt, (req, res) => {
  console.log(req.user.username)
  const course = req.body;
  COURSES.push({...course,id:COURSES.length+1});
  res.json({ message: "Course created Successfully", courseId: course.id });
});

app.put("/admin/courses/:courseId",authenticateJwt, (req, res) => {
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

app.post("/users/login", (req, res) => {
  res.json({ message: "Logged in Successfully" });
});

app.get("/users/courses", (req, res) => {
  res.json({ Courses: COURSES.filter((c) => c.published) });
});

app.post("/users/courses/:courseId",(req, res) => {
  const courseId = Number(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseId && c.published);
  if (course) {
    req.user.purchasedCourses.push(courseId);
    res.status(201).json({ message: "Course Bought Successfully" });
  } else {
    res.status(403).json({ message: "Course not found or not available" });
  }
});

app.get("/users/purchasedCourses",  (req, res) => {
  const purchasedCourses = COURSES.filter((c) =>
    req.user.purchasedCourses.includes(c.id)
  );

  res.json({ purchasedCourses });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
