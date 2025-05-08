import PersonaModel from "../models/PersonasModel.mjs";
import IRepository from "./IRepository.mjs";

class PersonasIRepository extends IRepository {

    async getAll(){
        const personas = await PersonaModel.find();
        return personas;
    }

    async getById(id){
        const persona = await PersonaModel.findById(id);
        return persona;
    }

    async create(persona){
        const nuevaPersona = await PersonaModel.create(persona);
        return nuevaPersona;
    }

    async update(id, datosActualizados){

        const personaActualizada = await PersonaModel.findOneAndUpdate(
            {_id: id},
            {$set: datosActualizados}, 
            {new: true}
        );

        return personaActualizada;

    }

    async delete(id){
        const personaEliminada = await PersonaModel.findByIdAndDelete(id);
        return personaEliminada;
    }

}

export default new PersonasIRepository;

console.log('pasó por /PersonasIRepository.mjs');