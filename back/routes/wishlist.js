const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/WishlistController');

router.post('/wishlist', wishlistController.addToWishlist);

router.get('/wishlist/:userId', wishlistController.getWishlist);

router.delete('/wishlist/:id', wishlistController.removeFromWishlist);

module.exports = router;