
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/AdminScehma");

const AdminLogin = async (req, res) => {
//   const { username, password } = req.body;

  try {
    const userdata = await Admin.findOne({ username:"admin" });
    if (userdata && (await bcrypt.compare("password", userdata.password))) {
      const token = genarateToken(userdata._id);
      res
        .status(200)
        .json({ message: "login success", token: token, userdata: userdata });
    } else {
      if (!userdata) {
        res.status(404).json({ message: "username not registered" });
      } else {
        res.status(401).json({ success: false, message: "Incorrect password" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const genarateToken = (id) => {
  return jwt.sign({ id }, "12345", { expiresIn: "30 min" });
};
module.exports = AdminLogin;
