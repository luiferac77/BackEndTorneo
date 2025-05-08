import express from 'express';
import { 
    crearUsuarioController, 
    loginUsuarioController
} from '../controllers/UsuariosController.mjs';
import {verificarToken} from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/usuarios/crear', verificarToken, crearUsuarioController);
router.post('/usuarios/login', loginUsuarioController);

export default router;