const Product = require('./productSchema')


// -- GET ALL PRODUCTS -- //

exports.getAllProducts = (req, res) => {

    Product.find({}, (err, products) => {

        if(err) {
            return res.status(500).json({
                statusCode: 500, 
                status: false, 
                message: 'Something went wrong when fetching the products...',
                err
            })
        }

        res.status(200).json(products)

    })
}



// -- GET ONE PRODUCT -- //

exports.getOneProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {

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
                message: 'Ooops this product does not exist...'
            })
        }

        Product.findById(req.params.id)
            .then(product => res.status(200).json(product))
            .catch( err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Internal server error',
                    err
                })
            })

    })
}


// -- CREATE NEW PRODUCT -- //

exports.createProduct = (req, res) => {

    Product.exists({ name: req.body.name }, (err, result) => {

        if(err) {
            return res.status(500).json(err)
        }

        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'A product with that name already exists...'
            })
        }

        Product.create({
            name:           req.body.name,
            description:    req.body.description,
            price:          req.body.price,
            img:            req.body.img,
            eimg:           req.body.eimg
        })
        .then(product => {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'Product created successfully!',
                product
            })
        })
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create product...',
                err
            })
        })

    })

}


// -- UPDATE PRODUCT -- //

exports.updateProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {

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
                message: 'Ooops this product does not exist...'
            })
        }

        Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(product => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Product updated successfully!',
                    product
                })
            })
            .catch(err => {
                
                if(err.code === 11000) {
                    return res.status(400).json({
                        statusCode: 400,
                        status: false,
                        message: 'A product with that name already exists...'
                    })
                }

                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to update product...',
                    err
                })
            })    

    })

}


// -- DELETE PRODUCT -- //

exports.deleteProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {

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
                message: 'Ooops this product does not exist...'
            })
        }

        Product.findByIdAndDelete(req.params.id)
            .then(product => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Product deleted successfully!',
                    product
                })
            })
            .catch(err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to delete product...',
                    err
                })
            })

    })

}