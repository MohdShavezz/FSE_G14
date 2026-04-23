import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import dbConn from './db/dbConn.js'
dotenv.config({
    // path:'foler/.env'
})

const app =express()
app.use(express.json())
dbConn()

app.use('/api/user',userRoutes)

app.listen(process.env.PORT,()=>{
    console.log('server is running on',process.env.PORT)
})