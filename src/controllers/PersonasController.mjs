import { 
            obtenerPersonaPorIdService, 
            obtenerTodasLasPersonasService, 
            crearPersonaService, 
            actualizarPersonaService, 
            eliminarPersonaService
        } from "../services/PersonasService.mjs";
import { renderizarTodasLasPersonas, renderizarPersonas } from "../views/ResponsePersonasViews.mjs";

export const obtenerTodasLasPersonasController = async (req, res) => {
    try {
        const personas = await obtenerTodasLasPersonasService();
        if(personas){
            res.send(renderizarTodasLasPersonas(personas));
        } else {
            res.status(404).send({mensaje: 'No hay personas para mostrar'});
            console.log('no hay personas para mostrar');
        }
    } catch (error) {
        res.status(404).send({mensaje: 'Error al devolver personas'});
        console.error('Error en obtenerTodasLasPersonasService', error);
    }
}

export const obtenerPersonaPorIdController = async (req, res) => {

    const {id} = req.params;

    try {
        const persona = await obtenerPersonaPorIdService(id);
        if(persona){
            res.send(renderizarPersonas(persona));
        } else {
            res.status(404).send({mensaje: 'No hay personas para mostrar'});
            console.log('no hay personas para mostrar');
        }
    } catch (error) {
        res.status(404).send({mensaje: 'Error al devolver personas'});
        console.error('Error en obtenerTodasLasPersonasService', error);
    }
}

export const crearPersonaController = async (req, res) => {
    const persona = req.body;
    try {
        const personaCreada = await crearPersonaService(persona);
        if(personaCreada){
            res.send(renderizarPersonas(personaCreada));
            return;
        } else {
            res.status(500).send({mensaje: 'No se pudo crear la persona'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error crear la persona'});
    }
}

export const actualizarPersonaController = async  (req, res) => {
    
    const {id} = req.params;
    const datosActualizados = req.body;

    try {
        const personaActualizada = await actualizarPersonaService(id, datosActualizados);   
        if(personaActualizada) {
            res.send(renderizarPersonas(personaActualizada));
            return;
        } else {
            res.status(404).send({ mensaje: 'No se encontró la persona para actualizar' });
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al actualizar la persona'});
        console.error('Error en actualizarPersonaController:', error);
    }
    
}

export const eliminarPersonaController = async (req, res) => {
    const {id} = req.params;
    try {
        const personaEliminada = await eliminarPersonaService(id);
        if(personaEliminada){
            res.send(renderizarPersonas(personaEliminada));
            return;
        } else {
            res.status(404).send({ mensaje: 'No se encontró la persona para eliminar' });
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error eliminar la persona'});
        console.error('Error en eliminarPersonaController:', error);
    }
}