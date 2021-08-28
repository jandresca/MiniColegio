const express = require("express");
const router = express.Router();
const TeacherController = require("../controllers/teacher");

router.post("/registerTeacher", TeacherController.registerTeacher);

module.exports = router;