import IRepository from "./IRepository.mjs";
import JugadorModel from "../models/JugadorModel.mjs";

class JugadoresRepository extends IRepository{

    async getAll(){
        const jugadores = await JugadorModel
            .find()
            .populate('persona_id', 'nombre apellido dni')
            .lean(); //lean() para devoler un objeto plano y así poder modificarlo
        
        const jugadoresFormateados = jugadores.map(jugador => ({
            _id: jugador._id, 
            nombre: jugador.persona_id?.nombre,
            apellido: jugador.persona_id?.apellido, 
            dni: jugador.persona_id?.dni, 
            posicion: jugador.posicion, 
            numero: jugador.numero, 
            creado_fecha: jugador.creado_fecha
        }));    
    return jugadoresFormateados;
    }

    async getById(id){
        const jugador = await JugadorModel
                .findById(id)
                .populate('persona_id', 'nombre apellido dni')
                .lean();
        
        if(!jugador){
            return null;
        } 
        
        return {
            _id: jugador._id,
            nombre: jugador.persona_id?.nombre,
            apellido: jugador.persona_id?.apellido,
            dni: jugador.persona_id?.dni,
            posicion: jugador.posicion,
            numero: jugador.numero,
            creado_fecha: jugador.creado_fecha
        };
    }

    async create(jugador){
        const nuevoJugador = await JugadorModel.create(jugador);
        
        const personaJugador = await JugadorModel
            .findById(nuevoJugador._id)
            .populate('persona_id', 'nombre apellido dni')
            .lean();
        
        return {
            _id: personaJugador._id, 
            nombre: personaJugador.persona_id?.nombre, 
            apellido: personaJugador.persona_id?.apellido, 
            dni: personaJugador.persona_id?.dni, 
            posicion: personaJugador.posicion, 
            numero: personaJugador.numero, 
            creado_fecha: personaJugador.creado_fecha
        }

    }

    async update(id, datosActualizados){
        
        await JugadorModel.findByIdAndUpdate(
            {_id: id}, 
            {$set: datosActualizados}, 
            {new: true}
        );

        const jugadorActualizado = await JugadorModel
            .findById(id)
            .populate('persona_id', 'nombre apellido dni')
            .lean();

        return {
            _id: jugadorActualizado.id, 
            nombre: jugadorActualizado.persona_id?.nombre, 
            apellido: jugadorActualizado.persona_id?.apellido, 
            dni: jugadorActualizado.persona_id?.dni, 
            posicion: jugadorActualizado.posicion, 
            numero: jugadorActualizado.numero, 
            creado_fecha: jugadorActualizado.creado_fecha
        }
    }

    async delete(id){

        const jugador = await JugadorModel
        .findById(id)
        .populate('persona_id', 'nombre apellido dni')
        .lean();

        if(!jugador) return null;

        await JugadorModel.findByIdAndDelete(id);

        return {
            _id : jugador._id, 
            nombre: jugador.persona_id?.nombre, 
            apellido: jugador.persona_id?.apellido, 
            dni: jugador.persona_id?.dni, 
            posicion: jugador.posicion, 
            numero: jugador.numero, 
            creado_fecha: jugador.creado_fecha
        };
        
        
    }

}

export default new JugadoresRepository;