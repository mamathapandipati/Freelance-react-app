const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
  },

  email: {
    type: String,
  },

  mobile: {
    type: Number,
  },
  skills: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  role: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmpassword: {
    type: String,
  },
});
LoginSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("LoginSchema", LoginSchema);
