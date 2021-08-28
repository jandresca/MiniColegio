const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/student");

router.post("/registerStudent", StudentController.registerStudent);

module.exports = router;
