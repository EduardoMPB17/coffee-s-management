import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://Amaro:123@ac-vgutnvs-shard-00-00.haejzuj.mongodb.net:27017,ac-vgutnvs-shard-00-01.haejzuj.mongodb.net:27017,ac-vgutnvs-shard-00-02.haejzuj.mongodb.net:27017/?ssl=true&replicaSet=atlas-wao00r-shard-0&authSource=admin&retryWrites=true&w=majority');
        console.log(">> DB conectada")
    }catch (error){
        console.log(error);
    }
};