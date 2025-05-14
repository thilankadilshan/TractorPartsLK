// models/Product.js
const mongoose = require('mongoose'); // ✅ You MUST import mongoose

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    partNumber: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    image: { type: String },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
