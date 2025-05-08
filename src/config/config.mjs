import 'dotenv/config';


// Listado de variables requeridas
const REQUIRED_VARS = ['MONGO_URI', 'PORT', 'JWT_SECRET'];

// Función para chequear las variables
const checkEnvVariables = () => {
    const missingVars = REQUIRED_VARS.filter(varName => !process.env[varName]);

    if (missingVars.length > 0) {
        console.error('❌ ERROR: Faltan las siguientes variables en tu archivo .env:\n');
        missingVars.forEach(varName => console.error(`- ${varName}`));
        console.error('\n🛠️  Solución: agregá las variables faltantes y volvé a iniciar el servidor.\n');
        process.exit(1);
    }
};

// Ejecutar la validación apenas cargue este módulo
checkEnvVariables();

export const config = {
    mongoUri: process.env.MONGO_URI,
    port: process.env.PORT
};