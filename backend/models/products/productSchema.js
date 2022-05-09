const mongoose = require('mongoose');


const productSchema = mongoose.Schema({

    name:           { type: String, required: true, unique: true },
    description:    { type: String, required: true },
    price:          { type: Number, required: true },
    img:            { type: String, required: true },
    eimg:           { type: String, required: true }

},  { timestamps: true })


module.exports = mongoose.model('Product', productSchema);