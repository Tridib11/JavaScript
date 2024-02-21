const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  const token = req.headers.authorisation;
  const words = token.split(" ");
  const jwtToken = words[1];
  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedValue.username) {
      next();
    } else {
      res.status(204).json({
        msg: "You are nor authenticated",
      });
    }
  } catch (e) {
    res.json({
      msg: "Incorrect inputs",
    });
  }
}

module.exports=userMiddleware