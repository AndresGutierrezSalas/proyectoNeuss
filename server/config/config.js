// Ports
const PORT = 3050;
process.env.PORT = process.env.PORT || PORT;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// Base de Datos
process.env.MYSQL_URL = "localhost";
process.env.MYSQL_USERNAME = process.env.MYSQL_USERNAME || "admin";
process.env.MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "admin";
process.env.MYSQL_DATABASE = process.env.MYSQL_DATABASE || "neuss_dev";

// Token
process.env.EXPIRATION_TOKEN = "24h";
process.env.SEED = process.env.SEED || "dev-seed";