import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://Eduardo:123@cluster0.xb1udix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log(">> DB conectada")
    }catch (error){
        console.log(error);
    }
};