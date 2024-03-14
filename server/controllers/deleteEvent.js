const Event = require("../models/EventSchema");

const deleteEvent=async(req,res)=>{
try {
    const { _id, } = req.body;
    const deletedevent=await Event.findByIdAndDelete(_id)
    res.status(200).json({ message: "event deleted successfully" });


} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  
}
}

module.exports=deleteEvent