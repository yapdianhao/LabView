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

    // db.query('CREATE TABLE IF NOT EXISTS vendors(id INT NOT NULL AUTO_INCREMENT, \
    //  name VARCHAR(100), phone_1 VARCHAR(100), phone_2 VARCHAR(100), email_1 VARCHAR(100), email_2 VARCHAR(100), \
    //  PRIMARY KEY(id))', (err, res, fields) => {
    //     if (err) console.log(err);
    //     else console.log(res);
    //  })

    // db.query('CREATE TABLE IF NOT EXISTS assets( \
    //         id VARCHAR(100) NOT NULL, \
    //         brand VARCHAR(100), \
    //         model VARCHAR(100), \
    //         serial VARCHAR(100), \
    //         age INT, \
    //         activation_date TIMESTAMP, \
    //         installation_date TIMESTAMP, \
    //         usp1058 ENUM(\'A\', \'B\', \'C\'), \
    //         pm_vendor INT, \
    //         calc_vendor INT, \
    //         instrument_description VARCHAR(500), \
    //         instrument_cost DOUBLE, \
    //         location VARCHAR(100), \
    //         asset_level ENUM(\'standard\', \'critical\', \'high-critical\'), \
    //         in_use BOOLEAN, \
    //         PRIMARY KEY (id))', (err, res) => {
    //     if (err) console.log(err);
    //     else console.log(res);
    // });

    // db.query('INSERT INTO assets(\
    //           id, \
    //           activation_date, \
    //           location, \
    //           brand, \
    //           model, \
    //           serial, \
    //           instrument_description, \
    //           installation_date, \
    //           age, \
    //           instrument_cost, \
    //           asset_level, \
    //           usp1058) VALUES (\
    //           \'CL10001\', \
    //           STR_TO_DATE(\'25-09-2022\',\'%d-%m-%Y\'), \
    //           \'Chemistry Lab\', \
    //           \'Agilent\', \
    //           \'1260 Infinity II HPLC\', \
    //           \'AG00002955\', \
    //           \'Liquid Chromotography\', \
    //           STR_TO_DATE(\'13-08-2018\',\'%d-%m-%Y\'), \
    //           2, \
    //           63000.00, \
    //           \'critical\', \
    //           \'C\')', (err, res) => {
    //             if (err) console.log(err);
    //             else console.log(res);
    //           });

    // db.query('ALTER TABLE assets \
    //           ADD COLUMN pm_freq INT, \
    //           ADD COLUMN calc_freq INT, \
    //           ADD COLUMN oq_freq INT, \
    //           ADD COLUMN contract_start_date TIMESTAMP, \
    //           ADD COLUMN contract_end_date TIMESTAMP, \
    //           ADD COLUMN iso17025 BOOLEAN, \
    //           ADD COLUMN labour_entitlement BOOLEAN, \
    //           ADD COLUMN parts_entitlement BOOLEAN, \
    //           ADD COLUMN oq_detail VARCHAR(500), \
    //           ADD COLUMN calc_detail VARCHAR(500), \
    //           ADD COLUMN pm_detail VARCHAR(500), \
    //           ADD COLUMN repair_detail VARCHAR(500), \
    //           ADD COLUMN maintenance_cost DOUBLE', (err, res) => {
    //             if (err) console.err(err);
    //             else console.log(res);
    //           })

    db.query('SELECT * FROM assets', (err, res) => {
        if (err) console.log(err);
        else console.log(res);
    })
});


module.exports = db;