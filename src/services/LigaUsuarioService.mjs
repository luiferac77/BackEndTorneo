import LigaUsuarioRepository from "../repository/LigaUsuarioRepository.mjs";

export const crearLigaUsuarioService = async (ligaUsuario) => {
    return await LigaUsuarioRepository.create(ligaUsuario);
}