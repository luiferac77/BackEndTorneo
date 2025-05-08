import mongoose from "mongoose";
import { config } from "./config.mjs";

//console.log('Contenido de uri', uri);

export const connectDB = async () => {

try {
    await mongoose.connect(config.mongoUri);
    console.log('La conexión ha sido exitosa');
} catch (err) {
    console.error('Error al conectar a l base de datos', err);
    process.exit(1);}

}

console.log('Paso por /config/dbConfig.mjs');