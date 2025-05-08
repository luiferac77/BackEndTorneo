import ClubesModel from "../models/ClubesModel.mjs";
import IRepository from "./IRepository.mjs";

class ClubesRepository extends IRepository {

    async getAll(){
        return await ClubesModel.find();
    }

    async getById(id){
        return ClubesModel.findById(id);
    }

    async create(club){
        return await ClubesModel.create(club);
    }

    async update(id, datosActualizados){
        return await ClubesModel.findOneAndUpdate(
            {_id: id}, 
            {$set: datosActualizados}, 
            {new: true}
        );
    }

    async delete(id){
        return await ClubesModel.findByIdAndDelete(id);
    }
    
}

export default new ClubesRepository;