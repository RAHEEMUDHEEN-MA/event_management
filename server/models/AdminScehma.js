const Mongoose = require("mongoose");

const AdminSchema=Mongoose.Schema({
    username:{type:String},
    password:{type:String},
})

const Admin=Mongoose.model("eventadmin",AdminSchema)

module.exports=Admin