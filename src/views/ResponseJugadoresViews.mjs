export const renderizarJugador = (jugador, opciones = {}) => {

    const { _id, nombre, apellido, dni, posicion, numero, creado_fecha } = jugador;

    const respuesta =  {
        id: _id, 
        nombreCompleto:`${apellido} ${nombre}`,
        dni, 
        posicion, 
        numero, 
        creado_fecha
    }

    if(opciones.simple){
        return {
            id: _id, 
            nombreCompleto: `${nombre} ${apellido}`, 
            numero, 
            posicion
        }
    }

    return respuesta;
}

export const renderizarTodosLosJugadores = (jugadores, opciones = {}) => {
    return jugadores.map(jugador => renderizarJugador(jugador, opciones));
}