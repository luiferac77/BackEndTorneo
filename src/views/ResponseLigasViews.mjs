export const renderizarLiga = (liga) => {
    const {_id, nombre, direccion, codigo_postal, usuario_id, creado_fecha} = liga;
    return {
        id:_id, 
        nombre, 
        direccion, 
        codigo_postal, 
        usuario_id, 
        creado_fecha
    }
}

export const renderizarTodasLasLigas = (ligas) => {
    return ligas.map(liga => renderizarLiga(liga));
}