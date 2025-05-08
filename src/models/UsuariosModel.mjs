import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String 
        }, 
    email: {
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true
    }, 
    clave: {
        type: String, required: true
    }, 
    rol: {
        type: String, 
        enum: ['creador_liga','admin_liga', 'admin_club', 'cargador_partido', 'tecnico', 'jugador', 'invitado', 'suscripto'],
        default: 'suscripto'
    },
    /*persona_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PersonaModel', 
        required: false
    },*/
    activo: {
        type: Boolean, 
        default: true
    }, 
    creado_fecha: {
        type: Date, 
        default: Date.now
    }
});

const UsuariosModel = mongoose.model('Usuariosmodel', UsuarioSchema, 'usuario'); 

export default UsuariosModel;