const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/course");

router.post("/registerCourse", CourseController.registerCourse);

module.exports = router;
