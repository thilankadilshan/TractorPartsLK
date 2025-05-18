
const express = require('express');
const router = express.Router();
const { createProduct, getNewestProducts, getProductById, getProductsBySeller } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const { uploadProduct } = require('../middleware/upload');
const { searchProducts } = require("../controllers/productController");

router.get("/search", searchProducts);

module.exports = router;


// ✅ Fixed route for product creation
router.post('/add-product', protect, uploadProduct.single('image'), createProduct);

// ✅ Route to get newest products
router.get('/newest-products', getNewestProducts);

// ✅ Route to get a single product by ID
router.get('/view/:id', getProductById); // Notice the /view to avoid conflict


router.get('/by-seller/:sellerId', getProductsBySeller);

module.exports = router;
