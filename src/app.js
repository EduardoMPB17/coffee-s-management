import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from './routes/auth.routes.js';
import taskRoutes from "./routes/task.routes.js";
import fileRoutes from "./routes/file.routes.js"; 
import productRoutes from './routes/product.routes.js'; 

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Rutas de la API
app.use('/api', authRoutes);
app.use('/api', taskRoutes);
app.use('/api/files', fileRoutes);
app.use('/api', productRoutes); 

export default app;