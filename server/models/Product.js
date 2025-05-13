// server/models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    description: String,
    stock: Number,
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
