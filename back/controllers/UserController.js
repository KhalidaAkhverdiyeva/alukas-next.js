const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateJWT = require('../utils/generateJWT');

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

        res.status(201).json({ msg: 'User registered successfully', token });
    } catch (err) {
        console.error('Error in register route:', err);
        res.status(500).json({ msg: 'Server error', err });
    }
}


const AuthLogin = async (req, res) => {
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
}


module.exports = { AuthRegister, AuthLogin };