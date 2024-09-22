
const express = require('express');
const router = express.Router();

const { addProduct, getProduct, deleteProduct, getProductByTitle } = require('../controllers/ProductController');


router.post('/add', addProduct);
router.get('/all', getProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/:title', getProductByTitle);

module.exports = router;