import IRepository from "./IRepository.mjs";
import UsuariosModel from "../models/UsuariosModel.mjs";
import LigaUsuarioModel from "../models/LigausuarioModel.mjs";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

class UsuariosRepository extends IRepository {

    async create(usuario){
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(usuario.clave, salt);

        usuario.clave = hashedPassword;

        const nuevoUsuario = await UsuariosModel.create(usuario);
        
        return nuevoUsuario;
    }

    async login({ email, clave }) {
        const JWT_SECRET = process.env.JWT_SECRET || 'secreto super seguro';
        const JWT_EXPIRES_IN = '1h';
    
        const usuario = await UsuariosModel.findOne({ email });
    
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
    
        const claveValida = await bcrypt.compare(clave, usuario.clave);
    
        if (!claveValida) {
            throw new Error("Clave incorrecta");
        }
    
        const payload = {
            id: usuario._id,
            email: usuario.email,
            rol: usuario.rol, 
        };
    
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    
        let ligasPermitidas = [];
    
        // Solo buscamos ligas si es admin_liga
        if (usuario.rol === 'admin_liga') {
            ligasPermitidas = await LigaUsuarioModel.find(
                { usuario_id: usuario._id },
                'liga_id' // <-- solo devolvemos liga_id
            ).lean(); // lean() mejora el rendimiento al devolver objetos JS simples
        }
    
        return {
            token,
            expiresIn: JWT_EXPIRES_IN,
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol, 
                ligas: usuario.ligas
            },
            ligas: ligasPermitidas.map(item => item.liga_id) // array de liga_id
        };
    }

}

export default new UsuariosRepository;