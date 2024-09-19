
const express = require('express');
const router = express.Router();

const { addHero, getHero, deleteHero } = require('../controllers/HeroController');


router.post('/add', addHero);
router.get('/all', getHero);
router.delete('/delete/:id', deleteHero);

module.exports = router;