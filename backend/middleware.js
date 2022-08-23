const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    let token = req.header("x-token");
    if (!token) {
      return res.status(400).send("token not found");
    } else {
      let decode = jwt.verify(token, "jwtsecure");
      req.user = decode.user;
      //pass req user details
      console.log("jwttoken", req.user);
      next();
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Authentication error");
  }
};
