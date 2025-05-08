import UsuariosRepository from "../repository/UsuariosRepository.mjs";

export const creaUsuarioService = async (usuario) => {
    return await UsuariosRepository.create(usuario);
}

export const loginUsuarioService = async ({email, clave}) => {
    return await UsuariosRepository.login({email, clave});    
}