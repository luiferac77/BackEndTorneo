import express from 'express';
import { 
    obtenerTodosLosClubesController, 
    obtenerClubesPorIdController,
    crearClubController,
    actualizarClubController, 
    eliminarClubController
} from '../controllers/ClubesController.mjs';

const router = express.Router();

router.get('/clubes', obtenerTodosLosClubesController);

router.post('/clubes/crear', crearClubController);


router.put('/clubes/actualizar/:id', actualizarClubController);
router.delete('/clubes/eliminar/:id', eliminarClubController);

router.get('/clubes/:id', obtenerClubesPorIdController);

export default router;