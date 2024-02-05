const mongoose = require("mongoose");
const express = require("express")
const app = express()
app.use(express.json())
mongoose.connect(
    "mongodb+srv://tridib:tridib@tridib.nubs8ht.mongodb.net/userapp_new",
);
const user = mongoose.model("users", {
    name: String,
    email: String,
    password: String,
});
app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const existingUser = await user.findOne({ email: email });
    if (existingUser) {
        return res.status(400).send("User already exists");
    }
    const user1 = new user({
        name: name,
        email: email,
        password: password,
    });
    user1.save();
    res.json({
        msg: "User created successfuylly"
    })
});

