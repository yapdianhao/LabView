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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

