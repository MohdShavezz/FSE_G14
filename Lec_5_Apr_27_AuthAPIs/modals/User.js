import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:['User','Admin'],
        default:'User'
    }
},{timestamps:true})

export const User = mongoose.model('User',userSchema)

