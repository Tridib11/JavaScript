const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const SECRET = "SECr3t";

//Defining mongoose schemas

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCoursses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

//Define Mongoose models

const User = mongoose.model("User", UserSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);

mongoose.connect("mongodb+srv://tridib:tridib11@cluster0.hkif3i6.mongodb.net/");
