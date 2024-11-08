const mongoose =require('mongoose')
const CompanyDetails=new mongoose.Schema({
    studentname:String,
    branch:String,
    USN:String,
    currentYear:Number
})
module.exports=mongoose.model("CompanyPdetails",CompanyDetails);
