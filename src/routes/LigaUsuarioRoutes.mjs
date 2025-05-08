import express from 'express';
import { crearLigaUsuarioController } from '../controllers/LigaUsuarioController.mjs';
import {verificarToken} from '../middleware/authMiddleware.mjs';

const router = express.Router();
router.post('/ligaUsuario/crear', verificarToken, crearLigaUsuarioController);

export default router;