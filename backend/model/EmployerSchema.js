const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const EmployerSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmpassword: {
    type: String,
  },

  companyname: {
    type: String,
  },
  website: {
    type: String,
  },
  role: {
    type: String,
    default: "subscriber",
  },
});
EmployerSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("EmployerSchema", EmployerSchema);
