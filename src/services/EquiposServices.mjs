import EquiposRepository from '../repository/EquiposRepository.mjs';

export const buscarTodosLosEquiposService = async () => {
    return await EquiposRepository.getAll();
}

export const buscarEquipoPorIdService = async (id) => {
    return await EquiposRepository.getById(id);
}

export const crearEquipoService = async (equipo) => {
    return await EquiposRepository.create(equipo);
}

export const actualizarEquipoService = async (id, datosActualizados) => {
    return await EquiposRepository.update(id, datosActualizados);
}

export const eliminarEquipoService = async (id) => {
    return await EquiposRepository.delete(id);
}