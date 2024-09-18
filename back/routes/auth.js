const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateJWT = require('../utils/generateJWT');
const User = require('../models/user');
const router = express.Router();


// Register Route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        let user = await User.findOne({ username });
        if (user) return res.status(400).json({ msg: 'User already exists' });


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ username, password: hashedPassword });
        await user.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', err });
    }
});


//Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Login request received:', { username, password });

    try {
        const user = await User.findOne({ username });
        if (!user) {
            console.log('User not found');
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password does not match');
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const token = generateJWT(user.id);
        console.log('Login successful, token generated');
        res.json({ token });
    } catch (err) {
        console.error('Error in login route:', err);
        res.status(500).json({ msg: 'Server error', err });
    }
});
module.exports = router;

