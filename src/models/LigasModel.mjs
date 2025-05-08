import mongoose from "mongoose";

const LigasSchema = new mongoose.Schema({
    nombre: {
        type: String, 
        required: true, 
        unique: true}, 
    direccion: {
        type: String
    }, 
    codigo_postal:{
        type: Number, 
        min: 1,
        max: 9999
    }, 
    usuario_id: {type: mongoose.Schema.Types.ObjectId, ref: 'UsuariosModel', required: true},
    creado_fecha: {
        type: Date, 
        default: Date.now
    }
});

const LigasModel = mongoose.model('LigasModel', LigasSchema, 'liga');

export default LigasModel;