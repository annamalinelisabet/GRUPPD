const Order = require('./orderSchema');


// -- CREATE NEW ORDER, INLOGGED USER -- //

exports.newOrder = (req, res) => {

    Order.create({
        userId:         req.userData.id,
        products:       req.body.cart,
        totalPrice:     req.body.totalAmount
    })
    .then(order => {
        res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Order was created successfully!',
            order
        })
    })
    .catch(err => {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to create a new order...',
            err
        })
    })

}

// -- GET ALL ORDERS FROM INLOGGED USER -- //

exports.getAllOrdersFromUser = (req, res) => {

    if(req.userData.id !== req.params.userId) {
        return res.status(403).json({
            statusCode: 403,
            status: false,
            message: 'You do not have access to this content!'
        })
    }
    
    Order.find({ userId: req.params.userId }, (err, orders) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Ooops something went wrong...'
            })
        }

        if(!orders) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'This user does not exist...'
            })
        }

        res.status(200).json(orders)

    })
}

// -- ADMIN - GET ALL ORDERS FROM ALL USERS -- //

exports.getAllOrdersFromUsers = (req, res) => {
    
    Order.find((err, orders) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Ooops something went wrong...'
            })
        }

        if(!orders) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'This user does not exist...'
            })
        }

        res.status(200).json(orders)

    })
}


// -- ADMIN - UPDATE ORDER TO COMPLETE -- //

exports.completeOrder = (req, res) => {

    Order.exists({ _id: req.params.orderId }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Ooops something went wrong...',
            })
        } 

        if(!result) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Ooops this order does not exist...'
            })
        }

        Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true })
            .then(order => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Order updated successfully!',
                    order
                })
            })
            .catch(err => {
                
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to update order...',
                    err
                })
            })    

    })

}

