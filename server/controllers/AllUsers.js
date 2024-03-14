const User = require("../models/UserSchema")

const AllUsers= async(req,res)=>
{
    try {
        const Users=await User.find()
        res.json(Users) 
    } catch (error) {
        res.status(500).send("Internal Server Error");
        console.log(`failed to get users:${error}`);
    }
}
module.exports=AllUsers