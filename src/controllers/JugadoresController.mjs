import {
        obtenerTodosLosJugadoresService, 
        obtenerJugadorPorIdservice,
        crearJugadorService, 
        actualizarJugadorService, 
        eliminarJugadorService
    } from '../services/JugadoresServices.mjs';
import {
    renderizarJugador, 
    renderizarTodosLosJugadores
} from '../views/ResponseJugadoresViews.mjs';

export const obtenerTodosLosjugadoresController = async (req, res) => {
    try {
        const jugadores = await obtenerTodosLosJugadoresService();
        if(jugadores && jugadores.length > 0){
            res.status(200).send(renderizarTodosLosJugadores(jugadores));
        } else {
            res.status(404).send({mensaje: 'no hay jugadores para mostrar'});
            console.log('no hay jugadores para mostrar');
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al devolver jugadores'});
        console.error('error al devolver todos los jugadores', error);
    }
}

export const obtenerJugadorPorIdController = async (req, res) => {
    const {id} = req.params;
    try {
        const jugador = await obtenerJugadorPorIdservice(id);
        console.log('Jugador en controller', jugador);
        if(jugador){
            res.status(200).send(renderizarJugador(jugador));
        } else {
            res.status(404).send({mensaje: 'No hay jugador para mostrar'});
            console.log('no hay jugador para mostrar');
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al devolver el jugador'});
        console.error('error al devolver el jugador', error);
    }

}

export const crearJugadorController = async (req, res) => {
    
    const nuevoJugador = req.body;

    try {
        const jugadorCreado = await crearJugadorService(nuevoJugador);
        if(jugadorCreado){
            res.status(200).send(renderizarJugador(jugadorCreado));
            return;
        } else {
            res.status(404).send({mensaje: 'No se encotró el jugador creado'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al crear el jugador'});
    }
}

export const actualizarJugadorController = async (req, res) => {
    
    const {id} = req.params;
    const datosActualizados = req.body;

    try {
        const jugadorActualizado = await actualizarJugadorService(id, datosActualizados);
        if(jugadorActualizado){
            res.status(200).send(renderizarJugador(jugadorActualizado));
            return;
        } else {
            res.status(400).send({mensaje: 'No se encontró el jugador para actualizar'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al actualizar el jugador'});
    }

}

export const eliminarJugadorController = async (req, res) => {

    const {id} = req.params;

    try {
        const jugadorEliminado = await eliminarJugadorService(id);
        if(jugadorEliminado){
            res.status(200).send(renderizarJugador(jugadorEliminado));
            return;
        } else {
            res.status(404).send({mensaje: 'no se encontró el jugador para eliminar'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'error al eliminar el jugador'});
    }
}
