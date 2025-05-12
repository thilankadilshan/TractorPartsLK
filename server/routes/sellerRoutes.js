const express = require('express');
const router = express.Router();
const Seller = require('../models/SellerProfile');
const upload = require('../middleware/upload'); // Multer config for image uploads

// @route   GET /api/sellers
// @desc    Get all sellers
// @access  Public
router.get('/', async (req, res) => {
    try {
        const sellers = await Seller.find().select('companyName logo description');

        // Fix path slashes before sending
        const cleanedSellers = sellers.map(seller => ({
            ...seller._doc,
            logo: seller.logo ? seller.logo.replace(/\\/g, '/') : null
        }));

        res.json(cleanedSellers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error while fetching sellers' });
    }
});

// @route   POST /api/sellers
// @desc    Register new seller
// @access  Public (or protected if you want)
// Make sure frontend sends multipart/form-data with a 'logo' field
router.post('/', upload.single('logo'), async (req, res) => {
    try {
        const { companyName, description } = req.body;

        const logoPath = req.file?.path ? req.file.path.replace(/\\/g, '/') : null;

        const newSeller = new Seller({
            companyName,
            description,
            logo: logoPath,
        });

        await newSeller.save();
        res.status(201).json(newSeller);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering seller' });
    }
});

module.exports = router;
