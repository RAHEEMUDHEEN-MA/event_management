const  Mongoose = require("mongoose");

const UserSchema=Mongoose.Schema(
    {
        name:{type:String},
        username:{type:String},
        password:{type:String},
        

    }

)

const User=Mongoose.model("eventusers",UserSchema)

module.exports=User