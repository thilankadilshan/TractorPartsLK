// const express = require('express');
// const router = express.Router();
// const { createProduct } = require('../controllers/productController');
// const { protect } = require('../middleware/authMiddleware');
// const { uploadProduct } = require('../middleware/upload');

// // ✅ FIXED: removed redundant 'seller' prefix
// router.post('/add-product', protect, uploadProduct.single('image'), createProduct);
// router.get('/newest-products', getNewestProducts); // Endpoint for newest products

// module.exports = router;

const express = require('express');
const router = express.Router();
const { createProduct, getNewestProducts, getProductById } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const { uploadProduct } = require('../middleware/upload');

// ✅ Fixed route for product creation
router.post('/add-product', protect, uploadProduct.single('image'), createProduct);

// ✅ Route to get newest products
router.get('/newest-products', getNewestProducts);

// ✅ Route to get a single product by ID
router.get('/view/:id', getProductById); // Notice the /view to avoid conflict



module.exports = router;
