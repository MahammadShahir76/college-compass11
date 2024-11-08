const mongoose =require('mongoose')
const candiReview=new mongoose.Schema({
    name:String,
    domain:String,
    review1:Number,
    review2:Number,
    review3:Number,
    description:String
    
})
module.exports=mongoose.model("CandidateReview",candiReview);