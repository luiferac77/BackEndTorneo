import mongoose from 'mongoose';

const LigaUsuarioSchema = new mongoose.Schema({
    liga_id: { type: mongoose.Schema.Types.ObjectId, ref: 'LigaModel', required: true },
    usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuariosmodel', required: true },
    rol: {
        type: String,
        enum: ['admin', 'club', 'dt', 'jugador'],
        required: true
    }
});

const LigaUsuarioModel = mongoose.model('LigaUsuarioModel', LigaUsuarioSchema, 'liga_usuarios');
export default LigaUsuarioModel;
