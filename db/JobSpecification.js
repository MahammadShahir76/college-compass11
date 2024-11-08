const mongoose =require('mongoose')
const specificationDetails=new mongoose.Schema({
    jobtitle:String,
    department:String,
    requiredskill:String,
    education:String,
    yoexperience:Number,
    jobdescription:String,
    preferedskill:String
})
module.exports=mongoose.model("JobSpecication",specificationDetails);
