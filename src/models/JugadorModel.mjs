import mongoose from "mongoose";

const jugadorSchema = new mongoose.Schema({
    persona_id: {type: mongoose.Schema.Types.ObjectId, ref: 'PersonaModel', required: true}, 
    posicion: {type: String, required: true, enum: ['arquero', 'defensor', "mediocampista", 'volante', 'delantero']}, 
    numero: {type: Number, required: true}, 
    creado_fecha: {type: Date, default: Date.now}
});

const JugadorModel = mongoose.model('JugadorModel', jugadorSchema, 'jugador');

export default JugadorModel;