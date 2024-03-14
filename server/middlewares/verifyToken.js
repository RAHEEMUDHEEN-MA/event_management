const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
    console.log("verifying")
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, "12345");
      next();
    } catch (error) {
      console.error("Token Error :", error.message);
      res.status(401).json({ message: error.message });
    }
  } else {
    console.log("no token");
    res.status(401).json({ error: "No token exist" });
  }
};

module.exports = VerifyToken;