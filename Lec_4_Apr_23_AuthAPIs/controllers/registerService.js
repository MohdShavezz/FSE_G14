import { User } from "../modals/User.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const registerService = async(req,res) => {
   try {
     const {username,email,password}=req.body

     // is already register
     const user=await User.findOne({email})
     if(user){
      return res.status(200).send('user already exist')
     }

     // encrypt password
    const hashedPass= await bcrypt.hash(password,10)

    const u=await User.insertOne({username,email,password:hashedPass})

    return res.status(201).json({success:true,message:'register success.',user:u})

   } catch (error) {
    console.log('error in registration',error.message)
   }
}
export const loginService = async(req,res) => {
   try {
     const {email,password}=req.body

     // is not registered
     const user=await User.findOne({email})
     if(!user){
      return res.status(200).send('invalid credentials')
     }

     // password 
     const result = await bcrypt.compare(password, user.password); // boolean
     if(!result){
      return res.status(404).send('invalid creds.')
     }

     // token
     const token= jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})

    return res.status(201).json({success:true,message:'login success.',user,token})

   } catch (error) {
    console.log('error in registration',error.message)
   }
}
