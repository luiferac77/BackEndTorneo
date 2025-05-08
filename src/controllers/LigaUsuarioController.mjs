import { renderizarLigaUsurio } from "../views/ResponseLigaUsuarioView.mjs";
import { crearLigaUsuarioService } from "../services/LigaUsuarioService.mjs";

export const crearLigaUsuarioController = async (req, res) => {
    const ligaUsuario = req.body;
    try {
        const nuevoLigaUsuario = await crearLigaUsuarioService(ligaUsuario);
        if(nuevoLigaUsuario){
            res.status(200).send(renderizarLigaUsurio(nuevoLigaUsuario));
        } else {
            res.status(404).send({mensaje: 'No se puedo crear ligaUsuario'});
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al crear ligaUsuario'});
    }
}