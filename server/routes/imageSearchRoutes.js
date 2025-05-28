const express = require('express');
const router = express.Router();
const multer = require('multer');
const { classifyImage } = require('../controllers/imageSearchController');

// Configure multer for image uploads (same as your product upload folder)
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/products'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// POST route to classify uploaded image
router.post('/classify', upload.single('image'), classifyImage);

module.exports = router;
