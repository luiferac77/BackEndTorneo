import mongoose from "mongoose";

const personaSchema = new mongoose.Schema({
    nombre: {type: String, required: true}, 
    apellido: {type: String, required: true}, 
    dni: {type: String, required: true, unique: true}, 
    fecha_nacimiento: {type: String}, 
    telefono: {type: String}, 
    direccion: {type: String}, 
    genero: {type: String, enum: ['masculino', 'femenino']}, 
    foto_url: {type: String}
});

const PersonaModel = mongoose.model('PersonaModel', personaSchema, 'persona');

export default PersonaModel;