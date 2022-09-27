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

    // db.query('CREATE TABLE IF NOT EXISTS users(id INT NOT NULL AUTO_INCREMENT, \
    //     first_name VARCHAR(100), last_name VARCHAR(100), title VARCHAR(50), \
    //     phone VARCHAR(50), gender ENUM(\"male\", \"female\"), \
    //     email VARCHAR(50), access_level ENUM(\"manager\", \"supervisor\", \"user\"), last_login TIMESTAMP, \
    //     password VARCHAR(100), PRIMARY KEY (id));', (err, res, fields) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(res);
    //     }
    // });

    // db.query('SHOW TABLES;', (err, res, fields) => {
    //     console.log(res);
    // })

    // db.query('INSERT INTO users(first_name, last_name, email, password, access_level) \
    //     VALUES(\'test\', \'user\', \'test@test.com\',\
    //      \'$2a$10$/nimQy0uuaf.xpUrLC3yKOpbcT3uT4/zbftc4VynQZcwwNtpAzgF6\', \
    //      \'manager\')', (err, res) => {
    //     if (err) throw err;
    //     else console.log(res);
    // });

    db.query('CREATE TABLE IF NOT EXISTS vendors(id INT NOT NULL AUTO_INCREMENT, \
     name VARCHAR(100), phone_1 VARCHAR(100), phone_2 VARCHAR(100), email_1 VARCHAR(100), email_2 VARCHAR(100), \
     PRIMARY KEY(id))', (err, res, fields) => {
        if (err) console.log(err);
        else console.log(res);
     })
});


module.exports = db;