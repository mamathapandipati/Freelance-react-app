const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },

  city: {
    type: String,
  },
  mobile: {
    type: String,
  },
  files: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("JobSchema", JobSchema);
