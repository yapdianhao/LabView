const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const response = await fetch('/api/users/' + email);
    console.log(response);
    // check for user email
    // if user exists, password compare same
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = {
    loginUser
};