// Create the connection to the MySQL database 
const mysql = require('mysql2');
const dbConfig = {
    host: 'localhost',
    database: 'verseinmind',
    user: 'root',
    password: 'my389574sql'
};

const db = mysql.createConnection(dbConfig);
db.connect(err => {
    if(err) {
        throw err;
    }
    console.log('Successfully connected to the db!');
});

// Export the database connection to project.js
module.exports = db;