const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'labvue-userdb.ch1fivipcvha.ap-southeast-1.rds.amazonaws.com',
    user: 'admin',
    password: 'labvue-admin',
    database: 'labvue',
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