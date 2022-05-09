const router = require('express').Router();
const productModel = require('../models/products/productModel');


router.get('/', productModel.getAllProducts);

router.get('/:id', productModel.getOneProduct)

router.post('/', productModel.createProduct);

router.patch('/:id', productModel.updateProduct)
router.put('/:id', productModel.updateProduct)

router.delete('/:id', productModel.deleteProduct);




module.exports = router;