const mongoose = require("mongoose");

const matterSchema = new mongoose.Schema({
    name: String,
    description: String,
    credits: String,
    date: { type: Date, default: Date.now }, 
});

const matter = mongoose.model("matter", matterSchema);
module.exports = matter;