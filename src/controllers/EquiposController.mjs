import { 
    buscarTodosLosEquiposService, 
    buscarEquipoPorIdService, 
    crearEquipoService,
    actualizarEquipoService,
    eliminarEquipoService
} from "../services/EquiposServices.mjs";

import { renderizarEquipo, renderizarTodosLosEquipos } from "../views/ResponseEquiposViews.mjs";

export const buscarTodosLosEquiposController = async (req, res) => {
    try {
        const equipos = await buscarTodosLosEquiposService();
        if(equipos){
            res.status(200).send(renderizarTodosLosEquipos(equipos));
            return;
        } else {
            res.status(404).send({mensaje: 'No se pudo enconctrar los equipos'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al buscar los equipos'});
    }
}

export const buscarEquipoPorIdController = async (req, res) => {

    const {id} = req.params;
    console.log(id);

    try {
        const equipo = await buscarEquipoPorIdService(id);
        if(equipo){
            res.status(200).send(renderizarEquipo(equipo));
            return;
        } else {
            res.status(404).send({mensaje: 'no se pudo econtrar el equipo'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: `${error}`});
    }

}

export const crearEquipoController = async (req, res) => {

    const equipo = req.body;

    try {
        const equipoCreado = await crearEquipoService(equipo);
        if(equipoCreado){
            res.status(200).send(renderizarEquipo(equipoCreado));
            return;
        } else {
            res.status(404).send({mensaje: 'no se pudo crear el equipo'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'error al crear el equipo'});
    }

} 

export const actualizarEquipoController = async (req, res) => {

    const {id} = req.params;
    const datosActualizados = req.body;

    try {
        const equipoActualizado = await actualizarEquipoService(id, datosActualizados);
        if(equipoActualizado){
            res.status(200).send(renderizarEquipo(equipoActualizado));
            return;
        } else {
            res.status(404).send({mensaje: 'No se pudo actualizar el equipo'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al actualizar el equipo'});
    }

}

export const eliminarEquipoController = async (req, res) => {
    const {id} = req.params;
    try {
        const equipoEliminado = await eliminarEquipoService(id);
        if(equipoEliminado){
            res.status(200).send(renderizarEquipo(equipoEliminado));
            return;
        } else {
            res.status(404).send({mensaje: 'No se puedo aliminar el equipo'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al eliminar el equipo'});
    }
}