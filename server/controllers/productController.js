// /*
// STEP 3: Controller Logic (controllers/productController.js)
// -----------------------------------------------------------
// */

// const Product = require('../models/Product');

// exports.createProduct = async (req, res) => {
//     try {
//         const { name, description, price, partNumber, brand, model } = req.body;
//         const image = req.file ? req.file.path.replace('server/', '') : '';

//         const product = new Product({
//             name,
//             description,
//             price,
//             partNumber,
//             brand,
//             model,
//             image,
//             seller: req.user.id
//         });

//         await product.save();
//         res.status(201).json(product);
//     } catch (err) {
//         console.error("Create Product Error:", err);
//         res.status(500).json({ error: 'Server error creating product' });
//     }

// };

// // controllers/productController.js
// const Product = require('../models/Product');

// exports.getNewestProducts = async (req, res) => {
//     try {
//         const products = await Product.find().sort({ createdAt: -1 }).limit(8); // Get 8 newest products
//         res.status(200).json(products);
//     } catch (err) {
//         console.error("Error fetching newest products:", err);
//         res.status(500).json({ error: 'Server error fetching newest products' });
//     }
// };

// controllers/productController.js

const Product = require('../models/Product');

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
