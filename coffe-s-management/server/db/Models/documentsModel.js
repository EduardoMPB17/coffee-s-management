import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const documentSchema = new Schema ({
    nombre: {
        type: String, required: true, unique: true
    },

    descripción: {
        type: String, required: false, unique: false
    },

    fechaCreación: {
        type: Date, required: true, unique: false
    },
    tipo: {
        type: String, required: true, unique: false
    }
});

const Documentos = model('Documentos', documentSchema);

export { Documentos };
