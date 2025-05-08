import PersonasIRepository from "../repository/PersonasIRepository.mjs";

export const obtenerTodasLasPersonasService = async () => {
    return await PersonasIRepository.getAll();
}

export const obtenerPersonaPorIdService = async (id) => {
    return await PersonasIRepository.getById(id);
}

export const crearPersonaService = async (persona) => {
    return await PersonasIRepository.create(persona);
}

export const actualizarPersonaService = async (id, datosActualizados) => {
    return await PersonasIRepository.update(id, datosActualizados);
}

export const eliminarPersonaService = async (id) => {
    return await PersonasIRepository.delete(id);
}