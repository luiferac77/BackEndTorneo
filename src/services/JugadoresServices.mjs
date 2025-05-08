import JugadoresRepository from "../repository/JugadoresRepository.mjs";


export const obtenerTodosLosJugadoresService = async () => {
    return await JugadoresRepository.getAll();
}

export const obtenerJugadorPorIdservice = async (id) => {
    return await JugadoresRepository.getById(id);
}

export const actualizarJugadorService = async (id, datosActualizados) => {
    return await JugadoresRepository.update(id, datosActualizados);
}

export const crearJugadorService = async (jugador) => {
    return await JugadoresRepository.create(jugador);
}

export const eliminarJugadorService = async (id) => {
    return await JugadoresRepository.delete(id);
}