import mongoose from "mongoose"

const dbConn = async() => {
    try {
        
        await mongoose.connect('mongodb://localhost:27017/g_14')
        console.log('db connected.')
    } catch (error) {
        console.log('error in database connection',error.message)
    }
}

export default dbConn
