const mysql = require('mysql2');
const createConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});
createConnection.connect((err) => {
    if(err){
        console.log('Error connecting to Database:', err);
    }else{
        console.log('Connected to Database');
    }
});

module.exports = createConnection;