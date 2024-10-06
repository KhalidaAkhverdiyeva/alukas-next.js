const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/WishlistController');

router.post('/', wishlistController.addToWishlist);

router.get('/:userId', wishlistController.getWishlist);

router.delete('/:id', wishlistController.removeFromWishlist);

module.exports = router;