const mongoose=require("mongoose")

const Connection=async()=>{
        try {
            console.log("trying to connect data base...")
           const connect=await mongoose.connect("mongodb+srv://raheemudheenma118:119881141@r4heem.4zbotc0.mongodb.net/react_test?retryWrites=true&w=majority&appName=r4heem") 
           console.log("Data baase connected successfully")
        } catch (error) {
            console.log("error in MONGO DB coneection",error)
            
        }
}
 

module.exports=Connection   