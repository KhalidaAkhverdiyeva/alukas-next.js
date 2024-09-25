const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
