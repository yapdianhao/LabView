/* eslint-disable no-multi-str */
const express = require('express');
const db = require('./db');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

// console.log(require('crypto').randomBytes(64).toString('hex'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.get('/api/users', (req, res) => {
//     db.query('SELECT * FROM users', (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         res.send(result);
//     });
// });

app.get('/', (req, res) => {
    db.query('SHOW TABLES', (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.use('/api/users', require('./routes/userRoutes'));

app.get('/api/user-list', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.get('/api/assets', (req, res) => {
    db.query('SELECT * FROM assets', (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.get('/api/get-asset', (req, res) => {
    const { query } = req;
    db.query('SELECT * FROM assets WHERE id = ?', [query.id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.get('/api/get-vendor', (req, res) => {
    const { query } = req;
    db.query('SELECT * FROM vendors WHERE id = ?', [query.id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.get('/api/frequencies', (req, res) => {
    db.query('SELECT * FROM frequencies', (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.get('/api/vendors', (req, res) => {
    db.query('SELECT * FROM vendors', (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
});

app.get('/api/repairs', (req, res) => {
    db.query('SELECT * FROM repairs', (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.get('api/get-repair', (req, res) => {
    const { query } = res;
    db.query(
        'SELECT asset_id, \
        problem, \
        solution, \
        reported_on, \
        recovered_on, \
        repair_vendor_id, \
        first_visit_complete, \
        part_cost, \
        labor_cost, \
        SELECT TIMESTAMPDIFF(HOUR, reported_on, recovered_on) AS diff\
        FROM repairs \
        WHERE asset_id = ?', 
        [query.asset_id],
        (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        }
    )
});

app.get('/api/get-utils', (req, res) => {
    const { query } = req;
    db.query('SELECT used_from, used_to, SELECT TIMESTAMPDIFF(HOUR, used_from, used_to) AS diff FROM utilizations WHERE asset_id = ?', [query.asset_id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.post('/api/edit-asset', (req, res) => {
    const { body } = req;
    const { asset } = body;
    db.query('UPDATE assets SET \
              brand = ?, \
              model = ?, \
              serial = ?, \
              age = ?, \
              activation_date = ?, \
              installation_date = ?, \
              usp1058 = ?, \
              calc_vendor = ?, \
              instrument_description = ?, \
              instrument_cost = ?, \
              location = ?, \
              asset_level = ?, \
              in_use = ?, \
              pm_freq = ?, \
              cal_freq = ?, \
              oq_freq = ?, \
              contract_start_date = ?, \
              contract_end_date = ?, \
              iso17025 = ?, \
              labour_entitlement = ?, \
              parts_entitlement = ?, \
              oq_detail = ?, \
              calc_detail = ?, \
              pm_detail = ?, \
              repair_detail = ?, \
              maintenance_cost = ?, \
              pm_cal_oq_vendor = ?, \
              repair_vendor = ? \
            WHERE id = ?', [
                asset.brand,
                asset.model,
                asset.serial,
                asset.age,
                new Date(asset.activation_date).toISOString().slice(0, 19).replace('T', ' '),
                new Date(asset.installation_date).toISOString().slice(0, 19).replace('T', ' '),
                asset.usp1058,
                asset.calc_vendor,
                asset.instrument_description,
                asset.instrument_cost,
                asset.location,
                asset.asset_level,
                asset.in_use,
                asset.pm_freq,
                asset.cal_freq,
                asset.oq_freq,
                asset.contract_start_date,
                asset.contract_end_date,
                asset.iso17025,
                asset.labour_entitlement,
                asset.parts_entitlement,
                asset.oq_detail,
                asset.calc_detail,
                asset.pm_detail,
                asset.repair_detail,
                asset.maintenance_cost,
                asset.pm_cal_oq_vendor,
                asset.repair_vendor,
                asset.id
            ], (err, result) => {
                if (err) console.log(err);
                else console.log(result);
            })
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

