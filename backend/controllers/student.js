const bcrypt = require("bcrypt");
const Student = require("../models/student");

const registerStudent = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.gender ||
    !req.body.dateBirth ||
    !req.body.code ||
    !req.body.email ||
    !req.body.password ||
    !req.body.mobilePhone ||
    !req.body.direction
  )
    return res.status(400).send("Incomplete data");

  let existingStudent = await Student.findOne({ email: req.body.email });
  if (existingStudent)
    return res.status(400).send("The student is already registered");

  let hash = await bcrypt.hash(req.body.password, 10);

  let student = new Student({
    name: req.body.name,
    gender: req.body.gender,
    dateBirth: req.body.dateBirth,
    code: req.body.code,
    email: req.body.email,
    password: hash,
    mobilePhone: req.body.mobilePhone,
    direction: req.body.direction,
  });

  let result = await student.save();
  if (!result) return res.status(400).send("Failed to register student");
  try {
    let jwtToken = student.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

module.exports = {
  registerStudent,
};
