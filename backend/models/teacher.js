const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const teacherSchema = new mongoose.Schema({
  name: String,
  title: String,
  gender: String,
  dateBirth: String,
  code: String,
  email: String,
  password: String,
  mobilePhone: String,
  direction: String,
  date: { type: Date, default: Date.now },
});

teacherSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      dateBirth: this.dateBirth,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

const teacher = mongoose.model("teacher", teacherSchema);
module.exports = teacher;
