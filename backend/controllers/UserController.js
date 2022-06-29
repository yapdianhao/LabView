const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    // check for user email
    // if user exists, password compare same
})

module.exports = {
    loginUser
};