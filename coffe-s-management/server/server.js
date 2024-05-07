import http from 'http';
import { connectDB } from '../server/db/db.js';

const server = http.createServer(async (req, res) => {
  const client = await connectDB();

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Este es el Backend');
});

server.listen(3000, () => {
  console.log('El Servidor esta corriendo en: http://localhost:3000/');
});