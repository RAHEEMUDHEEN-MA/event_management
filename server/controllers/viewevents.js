const Event = require("../models/EventSchema")

const viewEvents= async(req,res)=>{
   try {
    const u_id=req.body
    const events=await Event.find({createdBy:u_id})
    res.json({events:events});
   } catch (error) {
    res.status(500).send("Internal Server Error",error);
    console.log(`failed to get event ,error:${error}`);
 
   }
}

module.exports=viewEvents