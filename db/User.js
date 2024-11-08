const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    collegename:String
})
module.exports=mongoose.model("Users",userSchema);