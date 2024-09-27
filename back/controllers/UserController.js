const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateJWT = require('../utils/generateJWT');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const AuthRegister = async (req, res) => {
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

        res.status(201).json({ msg: 'User registered successfully', token, userId: user.id });
    } catch (err) {
        console.error('Error in register route:', err);
        res.status(500).json({ msg: 'Server error', err });
    }
}


const AuthLogin = async (req, res) => {
    const { username, password } = req.body;


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
        res.cookie('auth_token', { token: token, userId: user.id }, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000,
        });
        res.status(200).json({ msg: 'Login successful', token, userId: user.id });
    } catch (err) {
        console.error('Error in login route:', err);
        res.status(500).json({ msg: 'Server error', err });
    }
}

const ForgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User with this email does not exist' });
        }
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        const resetPasswordExpire = Date.now() + 10 * 60 * 1000;

        user.resetPasswordToken = resetPasswordToken;
        user.resetPasswordExpire = resetPasswordExpire;
        await user.save();

        const resetUrl = `http://localhost:3001/reset-password/${resetToken}`;
        const message = `
            <h1>You requested a password reset</h1>
            <p>Please click to the following link to reset your password:</p>
            <a href="${resetUrl}">${resetUrl}</a>
        `;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'khalidara@code.edu.az',
                pass: 'pygf nflq ywxa onbu',
            },
        });

        await transporter.sendMail({
            from: 'khalidara@code.edu.az',
            to: user.email,
            subject: 'Password Reset Request',
            html: message,
        });

        res.status(200).json({ msg: 'Reset password email sent' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', err });
    }
}
const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {

        const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');

        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid or expired token' });
        }

        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({ msg: 'Password has been reset successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', err });
    }
};


module.exports = { AuthRegister, AuthLogin, ForgotPassword, resetPassword };