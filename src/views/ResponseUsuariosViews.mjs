export const renderizarUsuario = (usuario) => {
    const {_id, nombre, email, clave, rol,ligas, activo} = usuario;
    return {
        id: _id, 
        nombre, 
        //email, 
        clave,
        ligas,
        rol, 

        activo
    }
}

export const renderizarTodosLosUsuarios = (usuarios) => {
    return usuarios.map(usuario => renderizarUsuario(usuario));
}