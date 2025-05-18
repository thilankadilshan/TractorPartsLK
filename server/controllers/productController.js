const Product = require('../models/Product');
const SellerProfile = require('../models/SellerProfile');


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

const searchProducts = async (req, res) => {
    const { q } = req.query;
    try {
        const regex = new RegExp(q, "i");
        const results = await Product.find({
            $or: [
                { name: regex },
                { partNumber: regex },
                { description: regex },
            ],
        });

        // Add full image URL
        const updatedResults = results.map((product) => {
            const imageUrl = product.image
                ? `${req.protocol}://${req.get('host')}/${product.image}`
                : '';

            return {
                ...product.toObject(),
                imageUrl,
            };
        });

        res.json(updatedResults);
    } catch (error) {
        res.status(500).json({ error: "Search failed." });
    }
};


module.exports = {
    createProduct: exports.createProduct,
    getNewestProducts: exports.getNewestProducts,
    getProductById: exports.getProductById,
    getProductsBySeller: exports.getProductsBySeller,
    searchProducts,
};

