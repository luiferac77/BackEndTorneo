export const renderizarEquipo = (equipo) => {
    
    const {_id, nombre, club_id, categoria} = equipo;
    return {
        id: _id, 
        nombre, 
        club_id, 
        categoria
    }

}

export const renderizarTodosLosEquipos = (equipos) => {
    return equipos.map(equipo =>  renderizarEquipo(equipo) );
}