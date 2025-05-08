import { 
    renderizarTodosLosClubes, 
    renderizarClub } from "../views/ResponseClubesViews.mjs";

import { 
    obtenerTodosLosClubesService, 
    obtenerClubesPorIdService, 
    actualizarClubesService, 
    eliminarClubService, 
    crearClubService
} from "../services/ClubesServices.mjs";

export const obtenerTodosLosClubesController = async (req, res) => {

    try {
        const clubes = await obtenerTodosLosClubesService();
        
        if(clubes){
            res.status(200).send(renderizarTodosLosClubes(clubes));
            return;
        } else {
            res.status(404).send({mensaje: 'No se encontraron clubes'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al recuperar los clubes'});
        console.error('Error en clubes', error);
    }

}

export const obtenerClubesPorIdController = async (req, res) => {

    const {id} = req.params;
    try {
        const club = await obtenerClubesPorIdService(id);
        if(club){
            res.status(200).send(renderizarClub(club));
            return;
        } else {
            res.status(404).send({mensaje: 'no se encontró el club'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'error al recuperar los datos del club'});
    }

}

export const crearClubController = async (req, res) => {
    const club = req.body;

    try {
        const nuevoClub = await crearClubService(club);
        if(nuevoClub){
            res.status(200).send(renderizarClub(nuevoClub));
            return;
        } else {
            res.status(404).send({mensaje: 'no se puedo crear el club'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al crear el club'});
    }
}

export const actualizarClubController = async (req, res) => {
    
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
        const clubActualizado = await actualizarClubesService(id, datosActualizados);
        if(clubActualizado){
            res.status(200).send(renderizarClub(clubActualizado));
            return;
        } else {
            res.status(404).send({mensaje: 'no se encontró el club para actualizar'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'error al actualizar el club'});
    }

}

export const eliminarClubController = async (req, res) => {
    const {id} = req.params;
    
    try {
        const clubEliminado = await eliminarClubService(id);
        if(clubEliminado){
            res.status(200).send(renderizarClub(clubEliminado));
        } else {
            res.status(404).send({mensaje: 'No se pudeo encontrar el club para eliminar'});
        }     
    } catch (error) {
        res.status(500).send({mensaje: 'Error al eliminar el club'});
    }

}