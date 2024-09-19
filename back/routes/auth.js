const express = require('express');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/generateJWT');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/user');
const router = express.Router();


// Register Route
router.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ msg: 'Please fill in all fields' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ msg: 'Passwords do not match' });
    }

    try {
        let user = await User.findOne({ username });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ username, email, password: hashedPassword });
        await user.save();
        const token = generateJWT(user.id);

        res.cookie('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000,
        });

        res.status(201).json({ msg: 'User registered successfully', token });
    } catch (err) {
        console.error('Error in register route:', err);
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
        res.cookie('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000,
        });
        res.status(200).json({ msg: 'Login successful', token });
    } catch (err) {
        console.error('Error in login route:', err);
        res.status(500).json({ msg: 'Server error', err });
    }
});

//Forgot-Pass Route

// router.post('/forgot-password', async (req, res) => {
//     const { email } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ msg: 'User with this email does not exist' });
//         }
//         const resetToken = crypto.randomBytes(32).toString('hex');
//         const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
//         const resetPasswordExpire = Date.now() + 10 * 60 * 1000;

//         user.resetPasswordToken = resetPasswordToken;
//         user.resetPasswordExpire = resetPasswordExpire;
//         await user.save();

//         const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
//         const message = `
//             <h1>You requested a password reset</h1>
//             <p>Please make a PUT request to the following link to reset your password:</p>
//             <a href="${resetUrl}">${resetUrl}</a>
//         `;

//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'your-email@gmail.com', // Replace with your email
//                 pass: 'your-email-password',  // Replace with your email password
//             },
//         });

//         await transporter.sendMail({
//             from: 'your-email@gmail.com',
//             to: user.email,
//             subject: 'Password Reset Request',
//             html: message,
//         });

//         res.status(200).json({ msg: 'Reset password email sent' });
//     } catch (err) {
//         res.status(500).json({ msg: 'Server error', err });
//     }
// });

module.exports = router;

