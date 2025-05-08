import EquiposModel from "../models/EquiposModel.mjs";
import IRepository from "./IRepository.mjs";

class EquiposRepository extends IRepository{

    async getAll(){
        return await EquiposModel.find();
    }

    async getById(id){
        return await EquiposModel.findById(id);
    }
    
    async create(equipo){
        return await EquiposModel.create(equipo);
    }

    async update(id, datosActualizados){
        return await EquiposModel.findOneAndUpdate(
            {_id: id}, 
            {$set: datosActualizados}, 
            {new: true}
        );
    }

    async delete(id){
        return await EquiposModel.findByIdAndDelete(id);
    }

}

export default new EquiposRepository;