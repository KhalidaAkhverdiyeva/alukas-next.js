const express = require('express')
const app = express()
const cors = require("cors")
const connectDB = require('./db/dbserver');
const authRoutes = require('./routes/auth');
require('dotenv').config();

app.use(express.json())
const PORT = 3000;
const url = process.env.CONNECTION_URL.replace("<db_password>", process.env.PASSWORD)
connectDB(url)


app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true,
}));

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});