const express = require('express');
// const crypto = require('crypto');
// const nodemailer = require('nodemailer');
const { AuthRegister, AuthLogin } = require("../controllers/UserController");

const router = express.Router();

router.post("/register", AuthRegister);
router.post("/login", AuthLogin);

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

