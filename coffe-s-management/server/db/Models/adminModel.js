import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const adminSchema = new Schema({
    nombre: {
        type: String, required: true, unique: false
    },

    apellido: {
        type: String, required: true, unique: false
    },

    rut: {
        type: Number, required: true, unique: true
    },

    email: {
        type: String, required: true, unique: true
    },

    contraseña: {
        type: String, required: true, unique: false
    },

    fecha_Nacimiento: {
        type: Date, required: true, unique: false
    }
});

const Admin = model('Admin', adminSchema);

export { Admin };
