const router = require('express').Router();
const orderModel = require('../models/orders/orderModel');
const auth = require('../authentication/auth');


router.post('/', auth.verifyToken, orderModel.newOrder);

router.get('/:userId', auth.verifyToken, orderModel.getAllOrdersFromUser);

router.get('/', auth.verifyTokenAndAdmin, orderModel.getAllOrdersFromUsers);

router.put('/:orderId', auth.verifyTokenAndAdmin, orderModel.completeOrder);
router.patch('/:orderId', auth.verifyTokenAndAdmin, orderModel.completeOrder);


module.exports = router;