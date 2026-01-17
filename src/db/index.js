import mongoose from 'mongoose';
import { dbname } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${dbname}`);
        console.log(`\n MongoDB connected!! DB HOST:${connectionInstance}`);
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1)
        
    }
}

export default connectDB;