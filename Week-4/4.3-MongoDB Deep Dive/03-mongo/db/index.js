const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://tridib:admin@cluster0.95d0jvi.mongodb.net/course-selling-app');

// // Listen for the connection event
// mongoose.connection.on('connected', () => {
//   console.log('Database connected'); // This message will be displayed when the connection is established
// });

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
};