const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    userId:                 { type: String, required: true },
    products: [{
                name:       { type: String, required: true },
                productId:  { type: String, required: true },
                price:      { type: Number, required: true },
                quantity:   { type: Number, required: true }
    }],
    totalPrice:             { type: Number, required: true },
    completed:              { type: Boolean, default: false }


}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema);