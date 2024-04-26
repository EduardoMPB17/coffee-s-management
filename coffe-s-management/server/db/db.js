import { MongoClient } from 'mongodb';

let client;

export async function connectDB() {
    if (!client) {
      try {
        client = new MongoClient('mongodb://localhost:27017');
        await client.connect();
        console.log('Conexión exitosa con la base de datos.');
      } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        process.exit(1);
      }
    }
    return client;
  }