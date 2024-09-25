const Wishlist = require('../models/wishlist');

exports.addToWishlist = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        const wishlistItem = new Wishlist({ userId, productId });
        await wishlistItem.save();
        res.status(201).json(wishlistItem);
    } catch (error) {
        res.status(500).json({ message: 'Error adding item to wishlist', error });
    }
};

exports.getWishlist = async (req, res) => {
    const { userId } = req.params;
    try {
        const wishlist = await Wishlist.find({ userId });
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching wishlist', error });
    }
};

exports.removeFromWishlist = async (req, res) => {
    const { id } = req.params;
    try {
        await Wishlist.findByIdAndDelete(id);
        res.status(200).json({ message: 'Item removed from wishlist' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing item from wishlist', error });
    }
};
