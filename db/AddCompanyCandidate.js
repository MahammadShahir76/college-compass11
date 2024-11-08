const mongoose =require('mongoose')
const companyfreshers=new mongoose.Schema({
    applicantDomain:String,
    applicantname:String,
    applicantemailid:String,
    applicantphoneno:Number
})
module.exports=mongoose.model("CompanyCandidates",companyfreshers);
