const mongoose = require("mongoose");
//task provider/employer -who are giving the rating,and we will get id when taskprovider login
//taskworke/freelancerr -who are taking rating
const MessageSchema = new mongoose.Schema({
  employer: {
    type: String,
  },
  freelancer: {
    type: String,
  },

  message: {
    type: String,
  },
});

module.exports = mongoose.model("MessageSchema", MessageSchema);
