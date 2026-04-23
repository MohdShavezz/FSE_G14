import express from 'express'
import { loginService, registerService } from '../controllers/registerService.js'

const router=express.Router()

router.route('/register').post(registerService)         // http://localhost:3000/api/user/register
router.route('/login').post(loginService)         // http://localhost:3000/api/user/login

export default router