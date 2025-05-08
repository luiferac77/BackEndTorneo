import LigaUsuarioModel from "../models/LigausuarioModel.mjs";
import IRepository from "./IRepository.mjs";

class LigaUsuarioRepository extends IRepository {

    async create(ligaUsuario){
        return await LigaUsuarioModel.create(ligaUsuario);
    }
}

export default new LigaUsuarioRepository;