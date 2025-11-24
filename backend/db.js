require('dotenv').config();

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

db.connect(err => {
  if (err) throw err;
  console.log('Successfully connected to MySQL!');
});

module.exports = db;
