const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { check, validationResult } = require('express-validator/check');

// @route   POST api/users
// @desc   register a user
// @access  Public
router.post('/', [
    check('name', 'Please add a name')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more charachters').isLength({
        min: 6
    })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    res.send('passed');
});

module.exports = router;