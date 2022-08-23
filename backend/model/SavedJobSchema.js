const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const SavedJobSchema = new mongoose.Schema({
  jobtitle: {
    type: String,
  },
  jobtype: {
    type: String,
  },
  qulifications: {
    type: String,
  },
  skills: {
    type: String,
  },
  city: {
    type: String,
  },
  companyname: {
    type: String,
  },
  companywebsite: {
    type: String,
  },
  workmodel: {
    type: String,
  },
  jobdescription: {
    type: String,
  },
});

module.exports = mongoose.model("SavedJobSchema", SavedJobSchema);
