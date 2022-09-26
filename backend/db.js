const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect((err) => {
    if (err) throw err;
    // db.query('SHOW DATABASES;', (err, res) => {
    //     console.log(res);
    // })
    db.query('USE labvue;', (err, res) => {
        console.log(res);
    });
    // db.query('CREATE TABLE IF NOT EXISTS companies(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100), PRIMARY KEY(id));', (err, res) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(res);
    //     }
    // }) 
    db.query('SELECT * FROM companies', (err, res) => {
        console.log(res);
    })
    // db.query('CREATE TABLE IF NOT EXISTS users(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100), \
    // email VARCHAR(100) UNIQUE NOT NULL, password VARCHAR(100) NOT NULL, role VARCHAR(100), \
    // PRIMARY KEY(id));', (err, res, fields) => {
    //     if (err) console.log(err);
    //     else console.log(res);
    // });
    // db.query('SHOW TABLES;', (err, res, fields) => {
    //     console.log(res);
    // })
    // db.query('INSERT INTO users VALUES(0, \'test_user\', \'test@test.com\', \'password\', \'MANAGER\')', (err, res) => {
    //     if (err) throw err;
    //     else console.log(res);
    // });
    // db.query('UPDATE users SET password = \'$2a$10$/nimQy0uuaf.xpUrLC3yKOpbcT3uT4/zbftc4VynQZcwwNtpAzgF6\' WHERE id = 1;', (err, res) => {
    //     if (err) throw err;
    //     console.log(res);
    // })
    // db.query('SELECT * FROM users', (err, result, fields) => {
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