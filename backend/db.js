/* eslint-disable no-multi-str */
const mysql = require("mysql");
require("dotenv").config();

let config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

if (process.env.NODE_ENV === "production") {
  console.log("Running from prod");
  config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
} else {
  config.host = process.env.DB_HOST;
}

const db = mysql.createConnection(config);

db.connect((err) => {
  if (err) {
    console.error(err.stack);
    return;
  }
  // db.query('SHOW DATABASES;', (err, res) => {
  //     console.log(res);
  // })
  db.query("USE labvue;", (err, res) => {
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
  //           usp1058, \
  //           in_use, \
  //           iso17025, \
  //           repair_vendor, \
  //           pm_cal_oq_vendor, \
  //           pm_freq, \
  //           cal_freq, \
  //           oq_freq, \
  //           labour_entitlement, \
  //           parts_entitlement, \
  //           maintenance_cost, \
  //           contract_start_date, \
  //           contract_end_date \
  //           ) VALUES ( \
  //           \'CL10005\', \
  //           STR_TO_DATE(\'25-09-2021\',\'%d-%m-%Y\'), \
  //           \'Chemistry Lab\', \
  //           \'Agilent\', \
  //           \'1100 HPLC\', \
  //           \'DE11600064\', \
  //           \'Liquid Chromotography\', \
  //           STR_TO_DATE(\'03-02-2008\',\'%d-%m-%Y\'), \
  //           14, \
  //           74000.00, \
  //           \'critical\', \
  //           \'C\', \
  //           TRUE, \
  //           FALSE, \
  //           1, \
  //           1, \
  //           1, \
  //           1, \
  //           1, \
  //           TRUE, \
  //           TRUE, \
  //           13600.00, \
  //           STR_TO_DATE(\'01-01-2021\',\'%d-%m-%Y\'), \
  //           STR_TO_DATE(\'31-12-2021\',\'%d-%m-%Y\'))', (err, res) => {
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

  // db.query('CREATE TABLE IF NOT EXISTS pm_cal_oq( \
  //           id INT NOT NULL AUTO_INCREMENT, \
  //           type ENUM(\'PM\', \'CAL\', \'OQ\'), \
  //           is_routine BOOLEAN, \
  //           remarks VARCHAR(250), \
  //           scheduled_time TIMESTAMP, \
  //           completed_time TIMESTAMP, \
  //           vendor_id INT, \
  //           PRIMARY KEY (id), \
  //           FOREIGN KEY (vendor_id) REFERENCES vendors(id))', (err, res) => {
  //             if (err) throw err;
  //             else console.log(res);
  //           });

  // db.query('CREATE TABLE IF NOT EXISTS consumables( \
  //           id INT NOT NULL AUTO_INCREMENT, \
  //           asset_id VARCHAR(100), \
  //           description VARCHAR(100), \
  //           cost DOUBLE, \
  //           part_number VARCHAR(100), \
  //           consumed_on TIMESTAMP, \
  //           PRIMARY KEY (id), \
  //           FOREIGN KEY (asset_id) REFERENCES assets(id))', (err, res) => {
  //             if (err) throw err;
  //             else console.log(res);
  //           })

  // db.query('CREATE TABLE IF NOT EXISTS utilizations(\
  //           id INT NOT NULL AUTO_INCREMENT, \
  //           asset_id VARCHAR(100), \
  //           used_from TIMESTAMP, \
  //           used_to TIMESTAMP, \
  //           total_hours INT DEFAULT 0, \
  //           PRIMARY KEY (id), \
  //           FOREIGN KEY (asset_id) REFERENCES assets(id))', (err, res) => {
  //             if (err) throw err;
  //             else console.log(res);
  //           })

  // db.query('CREATE TABLE IF NOT EXISTS repairs( \
  //           id INTEGER NOT NULL AUTO_INCREMENT, \
  //           asset_id VARCHAR(100), \
  //           problem VARCHAR(250), \
  //           solution VARCHAR(250), \
  //           reported_on TIMESTAMP, \
  //           recovered_on TIMESTAMP, \
  //           down_time INT DEFAULT 0, \
  //           repair_vendor_id INT, \
  //           first_visit_complete BOOLEAN, \
  //           part_cost DOUBLE, \
  //           labor_cost DOUBLE, \
  //         PRIMARY KEY (id), \
  //         FOREIGN KEY (asset_id) REFERENCES assets(id), \
  //         FOREIGN KEY (repair_vendor_id) REFERENCES vendors(id))', (err, res) => {
  //             if (err) throw err;
  //             else console.log(res);
  //         })

  // db.query('CREATE TABLE IF NOT EXISTS frequencies ( \
  //           id INT NOT NULL AUTO_INCREMENT, \
  //           description VARCHAR(100), \
  //           PRIMARY KEY (id))', (err, res) => console.log(res));

  // db.query('ALTER TABLE assets ADD FOREIGN KEY (oq_freq) REFERENCES frequencies(id)', (err, res) => {
  //     if (err) throw err;
  //     else console.log(res);
  // })

  // db.query('ALTER TABLE assets RENAME COLUMN calc_freq TO cal_freq', (err, res) => {
  //     console.log(res);
  // })

  // db.query('INSERT INTO frequencies (description) VALUES (\'60-monthly\')', (err, res) => {
  //     if (err) console.log(err);
  //     else console.log(res);
  // });

  // db.query('INSERT INTO vendors (name, phone_1, phone_2, email_1, email_2) VALUES ( \
  //         \'Metrohm Singapore Pte Ltd\', \
  //         \'69723556\', \
  //         \'69723556\', \
  //         \'fabien.lee@metrohm.com.sg\', \
  //         NULL)', (err, res) => {
  //             if (err) console.log(err);
  //             else console.log(res);
  //         });

  // db.query('SELECT * FROM frequencies', (err, res) => console.log(res));

  // db.query('ALTER TABLE repairs DROP COLUMN down_time', (err, res) => {
  //     if (err) console.log(err);
  //     else console.log(res);
  // })

  // db.query('SHOW COLUMNS FROM assets', (err, res) => {
  //     if (err) console.log(err);
  //     else {
  //         for (let row of res) {
  //             console.log('asset.' + row.Field + ',');
  //         }
  //     };
  // })

  db.query("SHOW COLUMNS FROM consumables", (err, res) => {
    if (err) console.log(err);
    else {
      for (let row of res) {
        console.log(JSON.stringify(row)+ ",");
      }
    }
  });

  // db.query('INSERT INTO repairs (\
  //     asset_id, \
  //     problem, \
  //     solution, \
  //     reported_on, \
  //     recovered_on, \
  //     repair_vendor_id, \
  //     first_visit_complete, \
  //     part_cost, \
  //     labor_cost) \
  //     VALUES (\
  //         \'CL10004\', \
  //         \'Unable to power up\', \
  //         \'Change the lamp\', \
  //         STR_TO_DATE(\'24-03-2021/09:00\', \'%d-%m-%Y/%H:%i\'), \
  //         STR_TO_DATE(\'24-03-2021/15:00\', \'%d-%m-%Y/%H:%i\'), \
  //         1, \
  //         FALSE, \
  //         700, \
  //         100\
  //     )', (err, res) => {
  //         if (err) console.log(err);
  //         else console.log(res);
  //     });

  // db.query('INSERT INTO utilizations (asset_id, used_from, used_to) VALUES \
  //         (\'CL10004\', STR_TO_DATE(\'02-03-2021/23:12:00\',\'%d-%m-%Y/%H:%i:%s\'), STR_TO_DATE(\'03-03-2021/05:12:00\',\'%d-%m-%Y/%H:%i:%s\'))', (err, res) => {
  //             if (err) console.log(err);
  //             else console.log(res);
  //         });

  // db.query('SELECT * FROM utilizations', (err, res) => {
  //     if (err) console.log(err);
  //     else {
  //         console.log(res);
  //     }
  // });

  // db.query('SELECT * FROM vendors', (err, res) => {
  //     if (err) console.log(err);
  //     else {
  //         console.log(res);
  //     }
  // });

  // db.query('INSERT INTO consumables(asset_id, description, cost, part_number\
  //   , consumed_on) VALUES (\
  //   \'CL10001\', \'Test description\', 450.00, \'A1022-3200\', \
  //   STR_TO_DATE(\'01-07-2021/14:36:00\',\'%d-%m-%Y/%H:%i:%s\')\
  //   )', (err, res) => {
  //     if (err) console.log(err);
  //     else {
  //       console.log(res);
  //     }
  //   })

  db.query("SELECT * FROM consumables", (err, res) => {
    if (err) console.log(err);
    else console.log(res);
  });
});

module.exports = db;
