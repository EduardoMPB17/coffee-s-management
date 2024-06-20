import mongoose from "mongoose";
import Grid from "gridfs-stream";

let gfs;
let conn;

export const connectDB = async () => {
    try {
        conn = await mongoose.connect('mongodb+srv://Eduardo:123@cluster0.xb1udix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log(">> DB conectada");

        gfs = Grid(conn.connection.db, mongoose.mongo);
        gfs.collection('uploads');
    } catch (error) {
        console.log(error);
    }
};

export { gfs, conn };