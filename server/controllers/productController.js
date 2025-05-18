const Product = require('../models/Product');
const SellerProfile = require('../models/SellerProfile');
const mongoose = require('mongoose');


// CREATE product
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, partNumber, brand, model } = req.body;
        const image = req.file ? req.file.path.replace('server/', '') : '';

        const product = new Product({
            name,
            description,
            price,
            partNumber,
            brand,
            model,
            image,
            seller: req.user.id
        });

        await product.save();
        res.status(201).json(product);
    } catch (err) {
        console.error("Create Product Error:", err);
        res.status(500).json({ error: 'Server error creating product' });
    }
};

// GET Newest Products
exports.getNewestProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 }).limit(8);
        res.status(200).json(products);
    } catch (err) {
        console.error("Error fetching newest products:", err);
        res.status(500).json({ error: 'Server error fetching newest products' });
    }
};

// ✅ GET Product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (err) {
        console.error("Error fetching product by ID:", err);
        res.status(500).json({ error: 'Server error fetching product' });
    }
};

// GET products by seller ID
exports.getProductsBySeller = async (req, res) => {
    try {
        const sellerProfileId = req.params.sellerId.trim();
        // Find the Seller Profile
        const sellerProfile = await SellerProfile.findById(sellerProfileId);
        if (!sellerProfile) {
            return res.status(404).json({ message: 'Seller profile not found' });
        }

        // Use userId to find products
        const products = await Product.find({ seller: sellerProfile.userId });
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching seller products:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.filterProducts = async (req, res) => {
    const { minPrice, maxPrice, brand, model } = req.query;
    const filter = {};

    if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    if (brand) filter.brand = new RegExp(brand, "i");
    if (model) filter.model = new RegExp(model, "i");

    try {
        const results = await Product.find(filter);
        const updatedResults = results.map((product) => {
            const imageUrl = product.image
                ? `${req.protocol}://${req.get('host')}/${product.image}`
                : '';
            return { ...product.toObject(), imageUrl };
        });

        res.json(updatedResults);
    } catch (error) {
        res.status(500).json({ error: "Filtering failed." });
    }
};


const searchProducts = async (req, res) => {
    const { q } = req.query;

    try {
        const regex = new RegExp(q, "i");
        const conditions = [
            { name: regex },
            { description: regex },
            { partNumber: regex },
            { brand: regex },
            { model: regex },
        ];

        // Also allow searching by _id if valid ObjectId
        if (mongoose.Types.ObjectId.isValid(q)) {
            conditions.push({ _id: q });
        }

        const results = await Product.find({ $or: conditions });

        const updatedResults = results.map((product) => {
            const imageUrl = product.image
                ? `${req.protocol}://${req.get('host')}/${product.image}`
                : '';
            return { ...product.toObject(), imageUrl };
        });

        res.json(updatedResults);
    } catch (error) {
        console.error("Search failed:", error);
        res.status(500).json({ error: "Search failed." });
    }
};

module.exports = {
    createProduct: exports.createProduct,
    getNewestProducts: exports.getNewestProducts,
    getProductById: exports.getProductById,
    getProductsBySeller: exports.getProductsBySeller,
    searchProducts: searchProducts,       // this is a const function, so just assign it here
    filterProducts: exports.filterProducts // add this here
};