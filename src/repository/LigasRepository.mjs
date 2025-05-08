import LigasModel from "../models/LigasModel.mjs";
import IRepository from "./IRepository.mjs";

class LigasRepository extends IRepository {
    
    async create(liga){
        return await LigasModel.create(liga);
    }    
    
    async getByName(query){
        return await LigasModel.find({
            nombre: { $regex: new RegExp(query, 'i')}
        });
    }
    async getById(id){
        return await LigasModel.findById(id);
    }

}

export default new LigasRepository;