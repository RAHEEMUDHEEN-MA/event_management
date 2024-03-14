const  Mongoose = require("mongoose");

const EventSchema=Mongoose.Schema(
    {
        title:{type:String},
        date:{type:String},
        time:{type:String},
        createdBy:{type:String,ref: "User"} ,
        place:{type:String}
    }

)

const Event=Mongoose.model("events",EventSchema)

module.exports=Event