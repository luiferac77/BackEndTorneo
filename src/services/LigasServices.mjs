import LigasRepository from "../repository/LigasRepository.mjs";

export const crearLigaService = async (liga) => {
    return await LigasRepository.create(liga);
}

export const buscarLigaPorIdService = async (id) => {
    return await LigasRepository.getById(id);
}