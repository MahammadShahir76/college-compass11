const mongoose =require('mongoose')
const seniorInfo=new mongoose.Schema({
    name:String,
    contact:Number,
    graduationyear:String,
    workingas:String,
    experience:Number,
    domain:String,
    specialisation:String,
})
module.exports=mongoose.model("CandidateInfo",seniorInfo);