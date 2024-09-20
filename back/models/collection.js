const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String }, // Optionally, for marketing
});

module.exports = mongoose.model('Collection', collectionSchema);