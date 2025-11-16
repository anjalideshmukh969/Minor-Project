const mongoose = require("mongoose")

const connectDB = async (req,res)=>{
    try {
        let res = await mongoose.connect(process.env.mongo_url);
        if(res){
            console.log("database connected");
            
        }
    } catch (error) {
        console.log("error in connecting db", error)
    }
}
module.exports = connectDB;