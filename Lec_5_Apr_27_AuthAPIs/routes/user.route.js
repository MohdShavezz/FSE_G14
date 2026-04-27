import express from 'express'
import { forgotPassword, loginService, registerService, resetPassword } from '../controllers/registerService.js'

const router=express.Router()

router.route('/register').post(registerService)         // http://localhost:3000/api/user/register
router.route('/login').post(loginService)         // http://localhost:3000/api/user/login
router.route('/forgot-password').post(forgotPassword)         // http://localhost:3000/api/user/forgot-password {email}
router.route('/reset-password').post(resetPassword)         // http://localhost:3000/api/user/reset-password {newpassword,token}

export default router