import express from 'express';
import { 
        buscarTodosLosEquiposController, 
        buscarEquipoPorIdController, 
        crearEquipoController, 
        actualizarEquipoController, 
        eliminarEquipoController 
    } from '../controllers/EquiposController.mjs';

const route = express();

route.get('/equipos', buscarTodosLosEquiposController);

route.post('/equipos/crear', crearEquipoController);

route.put('/equipos/actualizar/:id', actualizarEquipoController);
route.delete('/equipos/eliminar/:id', eliminarEquipoController);

route.get('/equipos/:id', buscarEquipoPorIdController);

export default route;