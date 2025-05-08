import mongoose from "mongoose";

const EquiposSchema = mongoose.Schema({
    nombre: {type: String, required: true}, 
    club_id: {type: mongoose.Schema.Types.ObjectId, ref: 'ClubesModel', required: true},
    categoria: {type:String, enum: ['juvenil', 'primera', 'reserva']}
});

const EquiposModel = mongoose.model('EquiposModel', EquiposSchema, 'equipo');

export default EquiposModel;