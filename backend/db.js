const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'labvue-userdb.ch1fivipcvha.ap-southeast-1.rds.amazonaws.com',
    user: 'admin',
    password: 'labvue-admin',
    database: 'labvue',
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
    // db.query('UPDATE users SET password = \'$2a$10$bVR3yAZc64T2A0xpCHe2fuVhBmqZe8PspEpvXVoz9xihcDViM9TAC\' WHERE id = 1');
    // db.query('INSERT INTO users VALUES(0, \'test_user\', \'test@test.com\', \'password\', \'ADMIN\');');
    // db.query('SELECT * FROM users;', (err, result, fields) => {
    //     console.log(result);
    // })
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