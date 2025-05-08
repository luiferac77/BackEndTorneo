export const renderizarClub = (club) => {
    const {_id, nombre, apodo, logo_url} = club;

    const respuesta = {
        id: _id,
        nombre, 
        apodo, 
        logo_url
    }

    return respuesta;
}

export const renderizarTodosLosClubes = (clubes) => {
    return clubes.map(club => renderizarClub(club));
}
