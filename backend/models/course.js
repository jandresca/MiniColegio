const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: String,
    code: String,
    teacher: String,
    sessiondata: String,
    place: String,
    date: { type: Date, default: Date.now }, 
});

const course = mongoose.model("course", courseSchema);
module.exports = course;