const mysql = require('mysql2');
const createConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'M@dhu_01',
    database:'demo_kec'
});
createConnection.connect((err) => {
    if(err){
        console.error('Error connecting to database:',err);
    }else{
        console.log('Connected to Database');
    }
});

module.exports = createConnection;