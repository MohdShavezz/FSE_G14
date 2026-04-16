import express from 'express'

import { addProduct, fetchProduct } from '../controllers/product.js'
import upload from '../config/upload.js'

const router = express.Router()


// Chain GET and POST for /product
// router.route('/product')
//   .get(fetchProduct)   // Handler for GET
//   .post(addProduct); 

// router.get('/product',fetchProduct)
router.post('/product',upload.single("image"), addProduct())

export default router