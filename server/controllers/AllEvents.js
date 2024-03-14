const Event = require("../models/EventSchema");

    const AllEvents= async(req,res)=>{
        try {
       
         const events=await Event.find()
         res.json({events:events});
        } catch (error) {
         res.send("Internal Server Error",error);
         console.log(`failed to get event ,error:${error}`);
      
        }
     }
     module.exports=AllEvents
   