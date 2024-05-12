import http from 'http';
import { connectDB } from '../server/db/db.js';

const startServer = async () => {
  try{
    const server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Este es el Backend');
    });

    server.listen(3000, () => {
      console.log('El Servidor está corriendo en: http://localhost:3000/');
    });

    const client = await connectDB();
  } catch (error) {
    console.error('Error al iniciar el servidor: ', error);
  }
};

startServer();
