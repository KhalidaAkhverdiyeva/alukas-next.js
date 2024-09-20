const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    collection: { type: mongoose.Schema.Types.ObjectId, ref: 'Collection', required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true }, // Store color name or hex code
    material: { type: String },
    size: { type: String },
    availability: { type: Boolean, default: true },
    images: [{ type: String }], // Array of images
    reviews: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
});

module.exports = mongoose.model('Product', productSchema);


// {
//     "title": "Product Name",
//     "imageUrl": "https://example.com/static-image.jpg",
//     "hoverImageUrl": "https://example.com/hover-image.jpg",
//     "images": [
//       "https://example.com/image1.jpg",
//       "https://example.com/image2.jpg",
//       "https://example.com/image3.jpg"
//     ],
//     "oldPrice": 100,
//     "newPrice": 75,
//     "isNew": true,
//     "discountPercentage": 25,
//     "reviews": 10,
//     "soldInLast15Hours": 5,
//     "longDescription": "This is a detailed product description.",
//     "viewers": 29
//   }