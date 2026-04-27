import { User } from "../modals/User.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import transporter from "../utils/sendEmail.js"

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

export const forgotPassword= async(req,res)=>{
   try {
      const {email}=req.body
      //user exist
      const user=await User.findOne({email})
      if(!user){
         return res.status(401).send('invalid user')
      }
      //token
      const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'2m'})
      // email
      await transporter.sendMail({
         to:email,
         subject:'Reset Password Link',
         html:`
            <h2> use this token to reset your password  </h2>
            <p> ${token}</p>
         `
      })
      return res.status(200).send('check you email')
   } catch (error) {
      console.log('error in forgotPassword',error.message)
   }
}
export const resetPassword= async(req,res)=>{
   try {
      const {newpassword,token}=req.body
      await jwt.verify(token,process.env.JWT_SECRET)
      const decoded= await jwt.decode(token,process.env.JWT_SECRET)
      const user= await User.findById(decoded?.userId)
      //user exist
      if(!user){
         return res.status(401).send('invalid user')
      }
      //pass reset
      const hashPass= await bcrypt.hash(newpassword,10)
      user.password=hashPass
      await user.save()
     
      res.status(200).send('reset password successful.')
   } catch (error) {
      console.log('error in resetPassword',error.message)
   }
}