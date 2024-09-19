const Hero = require('../models/hero');

const addHero = async (req, res) => {
    const { imageUrl, title, subtitle, description } = req.body;

    if (!imageUrl || !title || !subtitle || !description) {
        return res.status(400).json({ msg: 'Please fill in all fields' });
    }

    try {
        const hero = new Hero({ imageUrl, title, subtitle, description });
        await hero.save();
        res.status(201).json({ msg: 'Hero added successfully', hero });
    } catch (err) {
        console.error('Error in addHero route:', err);
        res.status(500).json({ msg: 'Server error', err });
    }
};

const getHero = async (req, res) => {
    try {
        const heroes = await Hero.find();
        res.status(200).json(heroes);
    } catch (err) {
        console.error('Error in getHero route:', err);
        res.status(500).json({ msg: 'Server error', err });
    }
};

const deleteHero = async (req, res) => {
    const { id } = req.params;

    try {
        const hero = await Hero.findById(id);

        if (!hero) {
            return res.status(404).json({ msg: 'Hero not found' });
        }

        await Hero.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Hero deleted successfully' });
    } catch (err) {
        console.error('Error in deleteHero route:', err);
        res.status(500).json({ msg: 'Server error', err });
    }
};

module.exports = { addHero, getHero, deleteHero };
