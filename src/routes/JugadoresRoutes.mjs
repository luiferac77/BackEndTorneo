import express from 'express';
import {
            obtenerTodosLosjugadoresController, 
            obtenerJugadorPorIdController, 
            actualizarJugadorController, 
            crearJugadorController, 
            eliminarJugadorController
        } from '../controllers/JugadoresController.mjs';

const router = express.Router();

router.get('/jugadores', obtenerTodosLosjugadoresController);

router.post('/jugadores/crear', crearJugadorController);

router.put('/jugadores/actualizar/:id', actualizarJugadorController);
router.delete('/jugadores/eliminar/:id', eliminarJugadorController);

router.get('/jugadores/:id', obtenerJugadorPorIdController);


export default router;