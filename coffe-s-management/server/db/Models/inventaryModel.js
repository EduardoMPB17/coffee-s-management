import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productsSchema = new Schema({
	nombre: {
		type: String, required: true, unique: false
  },
    
  categoria: {
    type: String, required: true, unique: false
  },
    
  precio: {
    type: Number, required: true, unique: false
  },
 
  cantidadDisponible: {
    type: Number, required: true, unique: false
  },
  
  fechaVencimiento: {
    type: Date, required: true, unique: false
  },
   
  proveedor: {
    type: String, required: true, unique: false
  }
});

const inventarySchema = new Schema({
  lista: [productosSchema]
});

const Productos = model('Productos', productsSchema);

const Inventario = model('Inentario', inventarySchema);

export { Productos, Inventario };
