const Course = require("../models/course");

const registerCourse = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.code ||
    !req.body.teacher ||
    !req.body.sessiondata ||
    !req.body.place
  )
    return res.status(400).send("Incomplete data");

  let existingCourse = await Course.findOne({ name: req.body.name });
  if (existingCourse)
    return res.status(400).send("The course is already registered");

  let course = new Course({
    name: req.body.name,
    code: req.body.code,
    teacher: req.body.teacher,
    sessiondata: req.body.sessiondata,
    place: req.body.place
  });

  let result = await course.save();
  if (!result) return res.status(400).send("Failed to register course");
  return res.status(200).send({ result });

}
module.exports = {
  registerCourse,
};
