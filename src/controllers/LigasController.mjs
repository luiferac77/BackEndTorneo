import { 
    renderizarLiga, 
    renderizarTodasLasLigas 
} from "../views/ResponseLigasViews.mjs";

import { 
    crearLigaService, 
    buscarLigaPorIdService
} from "../services/LigasServices.mjs";

export const crearLigaController = async (req, res) => {
    const liga = req.body;
    try {
        const ligaCreada = await crearLigaService(liga);
        if(ligaCreada){
            res.status(200).send(renderizarLiga(ligaCreada));
        } else {
            res.status(404).sned({mensaje: 'No se pudo crear la liga'});
        } 
    } catch (error) {
        res.status(505).send({mensaje: 'error al crear la liga'});
    }
}

export const buscarLigaPorIdController = async (req, res) => {
    const {id} = req.params;
    try {
        const liga = await buscarLigaPorIdService(id);
        if(liga){
            res.status(200).send(liga);
        } else {
            res.status(404).send({mensaje: 'No se encontro la liga'});
        }
    } catch (error) {
        res.status(500).send({mensaje: `error al buscar la liga: ${error}`});
    }
}