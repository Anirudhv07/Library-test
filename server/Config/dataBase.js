import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB=async()=>{
    const MONGO_URL=process.env.MONGO_URL
    try{
        await mongoose.connect(MONGO_URL).then(()=>{
            console.log('Database connected');
            
        })
    }catch(err){
        console.log(err,'Error occured');
        
    }
}

export default connectDB