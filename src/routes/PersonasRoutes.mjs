import express from 'express';
import { 
    obtenerTodasLasPersonasController,
    obtenerPersonaPorIdController, 
    crearPersonaController, 
    actualizarPersonaController, 
    eliminarPersonaController
} from '../controllers/PersonasController.mjs';
import {verificarToken} from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.get('/personas', obtenerTodasLasPersonasController);

router.post('/personas/crear', verificarToken, crearPersonaController);

router.put('/personas/actualizar/:id', actualizarPersonaController);
router.delete('/personas/eliminar/:id', eliminarPersonaController);

router.get('/personas/:id', obtenerPersonaPorIdController);

export default router;