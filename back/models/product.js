const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    collectionName: { type: String, required: true },
    newPrice: { type: Number, required: true },
    oldPrice: { type: Number },
    discountPercent: {
        type: Number, default: function () {
            if (this.oldPrice) {
                return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
            }
            return null;
        }
    },
    smallCardImage: { type: String, required: true },
    smallCardHoverImage: { type: String, required: true },
    color: { type: String, required: true },
    material: { type: String },
    size: { type: String, enum: ['S', 'M', 'L', 'XL', '12', '14', '16'] },
    availability: {
        type: String,
        enum: ['in stock', 'out of stock'],
        default: 'in stock',
    },
    tags: [{ type: String }],
    detailImages: [{ type: String }],
    reviews: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    soldOut: { type: Boolean, default: false },
    isNewProduct: { type: Boolean, default: false }
});

module.exports = mongoose.model('Product', productSchema);


