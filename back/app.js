const express = require('express')
const app = express()
const cors = require("cors")
const connectDB = require('./db/dbserver');
const authRoutes = require('./routes/auth');
const heroRoutes = require('./routes/hero');
const productRoutes = require('./routes/product')
const wishlistRoutes = require('./routes/wishlist');
require('dotenv').config();

app.use(express.json())
const PORT = 3001;
const url = process.env.CONNECTION_URL.replace("<db_password>", process.env.PASSWORD)
connectDB(url)


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use('/api/auth', authRoutes);
app.use('/api/hero', heroRoutes);
app.use('/api/product', productRoutes)

app.use('/api/wishlist', wishlistRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});