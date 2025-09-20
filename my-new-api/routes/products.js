const express = require('express');
const router = express.Router();
const { saveProduct } = require('../middleware/validate');
const productsController = require('../controllers/products');

router.get('/', productsController.getAll);
router.get('/:id', productsController.getSingle);
router.post('/', saveProduct, productsController.createProduct);
router.put('/:id', saveProduct, productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
