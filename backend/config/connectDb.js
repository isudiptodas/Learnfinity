import mongoose from 'mongoose';

export const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected !");
    }
    catch(err){
        console.error(err.message);
    }
}