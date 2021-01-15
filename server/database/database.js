const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: process.env.MYSQL_URL,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});

//--default-authentication-plugin=mysql_native_password

module.exports = mysqlConnection;