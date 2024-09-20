
const express = require('express');
const router = express.Router();

const { addProduct, getProduct, deleteProduct } = require('../controllers/ProductController');


router.post('/add', addProduct);
router.get('/all', getProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;