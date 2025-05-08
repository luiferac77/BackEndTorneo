import { connectDB } from './config/dbConfig.mjs';
import { config } from './config/config.mjs';
import app from './app.mjs';

const PORT = config.port || 3000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor', error);
        process.exit(1);
    }
}

startServer();