export const renderizarLigaUsurio = (ligaUsuario) => {
    const {_id, liga_id, usuario_id, rol} = ligaUsuario
    return {
        id: _id, 
        liga_id, 
        usuario_id, 
        rol
    }
}

export const renderizarTodosLigaUsuario = (ligasUsuarios) => {
    return ligasUsuarios.map(ligaUsuario => renderizarLigaUsurio(ligaUsuario));
}