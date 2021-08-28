const bcrypt = require("bcrypt");
const Teacher = require("../models/teacher");

const registerTeacher = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.title ||
    !req.body.gender ||
    !req.body.dateBirth ||
    !req.body.code ||
    !req.body.email ||
    !req.body.password ||
    !req.body.mobilePhone ||
    !req.body.direction
  )
    return res.status(400).send("Incomplete data");

  let existingTeacher = await Teacher.findOne({ email: req.body.email });
  if (existingTeacher)
    return res.status(400).send("The teacher is already registered");

  let hash = await bcrypt.hash(req.body.password, 10);

  let teacher = new Teacher({
    name: req.body.name,
    title: req.body.title,
    gender: req.body.gender,
    dateBirth: req.body.dateBirth,
    code: req.body.code,
    email: req.body.email,
    password: hash,
    mobilePhone: req.body.mobilePhone,
    direction: req.body.direction,
  });

  let result = await teacher.save();
  if (!result) return res.status(400).send("Failed to register teacher");
  try {
    let jwtToken = teacher.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

module.exports = {
  registerTeacher,
};
