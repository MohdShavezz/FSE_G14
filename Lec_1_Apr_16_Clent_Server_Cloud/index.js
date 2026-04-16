import express from 'express'
import productRouter from './routes/product.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();
const app = express() 
app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then((res)=>{
    console.log('db connected')
}).catch(error=>console.log('db connection failed'))

app.use('/api',productRouter)

app.listen(process.env.PORT,()=>{
    console.log('server is running on',process.env.PORT)
})