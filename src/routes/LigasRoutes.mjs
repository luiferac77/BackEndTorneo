import express from 'express';
import { 
    crearLigaController,
    buscarLigaPorIdController
} from '../controllers/LigasController.mjs';
import {verificarToken} from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/ligas/crear', verificarToken, crearLigaController);
router.get('/ligas/buscarporid/:id', buscarLigaPorIdController);
//router.post('/ligas/crear', crearLigaController);

export default router;