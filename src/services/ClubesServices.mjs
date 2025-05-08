import ClubesRepository from "../repository/ClubesRepository.mjs";

export const obtenerTodosLosClubesService = async () => {
    return await ClubesRepository.getAll();
}

export const obtenerClubesPorIdService = async (id) => {
    return await ClubesRepository.getById(id);
}

export const crearClubService = async (club) => {
    return await ClubesRepository.create(club);
}

export const actualizarClubesService = async (id, datosActualizados) => {
    return await ClubesRepository.update(id, datosActualizados);
}

export const eliminarClubService = async (id) => {
    return await ClubesRepository.delete(id);
}