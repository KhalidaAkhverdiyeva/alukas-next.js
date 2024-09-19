const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;