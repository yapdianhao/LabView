const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db')
const asyncHandler = require('express-async-handler');

const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', email, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    const userFound = await getUserByEmail(email);
    console.log(userFound);
    if (userFound.length > 0) {
        const userFromDB = userFound[0];
        if (await bcrypt.compare(password, userFromDB.password)) {
            console.log(process.env.JWT_SECRET);
            res.json({
                _id: userFromDB.id,
                name: userFromDB.name,
                email: userFromDB.email,
                token: generateToken(userFromDB.id),
            })
        }
    } else {
        res.status(400);
    }
};

const generateToken = (id) => {

    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = {
    loginUser
};