const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");

const SignUp = async (req, res) => {


  try {
    const { name, username, password } = req.body;
    console.log(name,username,password)
    // password="password"
   
    const salt = await bcrypt.genSalt(6); 

    const encryptedPassword = await bcrypt.hash(password, salt);
    

    const newUser = await User.create({
      name:name,
      username:username,
      password: encryptedPassword,
    }); 

    res.send({ user_created: newUser });
  } catch (error) {
    res.status(500).send("Internal Server Error");
    console.log(`failed to add user ,error:${error}`);
  }
};

module.exports = SignUp;
