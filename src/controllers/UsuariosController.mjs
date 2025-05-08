import { 
    creaUsuarioService, 
    loginUsuarioService
} from "../services/UsuariosServices.mjs"; 
import { 
    renderizarUsuario, 
    renderizarTodosLosUsuarios 
} from "../views/ResponseUsuariosViews.mjs";

export const crearUsuarioController = async (req, res) => {

    const usuario = req.body;
        
    try {
        const usuarioCreado = await creaUsuarioService(usuario);
        if(usuarioCreado){
            console.log(usuarioCreado);
            res.status(200).send(renderizarUsuario(usuarioCreado));
            return;
        } else {
            res.status(404).send({mensaje: 'No se puedo crear el usuario'});
            return;
        }
    } catch (error) {
        res.status(500).send({mensaje: `Error al crear el usuario: ${error}`});
    }

}

export const loginUsuarioController = async (req, res) => {
    const {email, clave} = req.body;
    try {
        const loginResult = await loginUsuarioService({email, clave});
        if(loginResult){
            //console.log(loginResult);
            res.status(200).send(loginResult);
        } else {
            res.status(404).send({mensaje: 'Usuario no encontrado'});
        }
    } catch (error) {
        res.status(500).send({mensaje: `error al buscar el usuario: ${error}`});
    }
}