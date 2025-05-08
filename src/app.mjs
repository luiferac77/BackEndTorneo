import express, {urlencoded} from 'express';
import PersonasRoutes from './routes/PersonasRoutes.mjs';
import JugadoresRoutes from './routes/JugadoresRoutes.mjs';
import ClubesRoutes from './routes/ClubesRoutes.mjs';
import EquiposRoutes from './routes/EquiposRoutes.mjs';
import UsuariosRouter from './routes/UsuariosRoutes.mjs';
import LigasRouter from './routes/LigasRoutes.mjs';
import LigaUsuarioRoutes from './routes/LigaUsuarioRoutes.mjs'
import cors from 'cors';

const app = express();

app.use(cors());

//middleware para usar json
app.use(express.json());

//uso las rutas
app.use('/api', PersonasRoutes);
app.use('/api', JugadoresRoutes);
app.use('/api', ClubesRoutes);
app.use('/api', EquiposRoutes);
app.use('/api', UsuariosRouter);
app.use('/api', LigasRouter);
app.use('/api', LigaUsuarioRoutes);

export default app;
