import mongoose from 'mongoose';
import Grid from 'gridfs-stream';
import dotenv from 'dotenv';

dotenv.config();

let gfs;
let conn;

export const connectDB = async () => {
    try {
        conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(">> DB conectada");

        // Referencia a la base de datos
        const db = conn.connection.db;

        // Inicializa GridFS
        gfs = Grid(db, mongoose.mongo);
        gfs.collection('uploads'); // Colección de almacenamiento de los archivos
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export { gfs, conn };