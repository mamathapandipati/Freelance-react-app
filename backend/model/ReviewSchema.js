const mongoose = require("mongoose");
//task provider -who are giving the rating,and we will get id when taskprovider login
//taskworker -who are taking rating
const ReviewSchema = new mongoose.Schema({
  taskprovider: {
    type: String,
  },
  taskworker: {
    type: String,
  },

  rating: {
    type: String,
  },
  description: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("ReviewSchema", ReviewSchema);
