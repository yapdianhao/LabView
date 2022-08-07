const mysql = require('mysql');
require('dotenv').config();

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_PASSWORD);


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect((err) => {
    if (err) throw err;
    db.query('USE labvue;');
    db.query('SHOW TABLES;', (err, result, fields) => {
        console.log(result);
    });
    // db.query('SHOW FIELDS FROM users', (err, result, fields) => {
    //     console.log(result);
    // });
});


module.exports = db;


// con.connect((err) => {
//     if (err) throw err;
//     con.query('USE labvue;');
//     con.query('SHOW TABLES;', (err, result, fields) => {
//         console.log(result);
//     });
//     /// con.query('CREATE DATABASE IF NOT EXISTS labvue');
//     // con.query('USE labvue');
//     // con.query('CREATE TABLE IF NOT EXISTS users(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100), \
//     // email VARCHAR(100) UNIQUE NOT NULL, password VARCHAR(100) NOT NULL, role VARCHAR(100), \
//     // PRIMARY KEY(id));', (err, res, fields) => {
//     //     console.log(res);
//     // });
//     con.end();
// })