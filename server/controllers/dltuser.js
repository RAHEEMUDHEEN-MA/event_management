const User = require("../models/UserSchema")

const deleteUser=async(req,res)=>{
  try {
    const {_id}=req.body
    const dltedUser=await User.deleteOne({_id:_id})
    res.status(200).send({ message: "User deleted", deletedUser: dltedUser });

  } catch (error) {
    console.log(error)
  }
}

module.exports=deleteUser