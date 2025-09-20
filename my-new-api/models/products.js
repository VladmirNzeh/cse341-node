const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true},
    brand: String,
    price: { type: Number, required: true },
    category: String,
    releaseDate: String   
})
module.exports = mongoose.model('Products', productSchema);