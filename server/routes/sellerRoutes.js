const express = require('express');
const router = express.Router();
const Seller = require('../models/SellerProfile'); // Your seller model

// @route   GET /api/sellers
// @desc    Get all sellers
// @access  Public
router.get('/', async (req, res) => {
    try {
        const sellers = await Seller.find().select('companyName logo description'); // only fetch needed fields
        res.json(sellers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error while fetching sellers' });
    }
});

module.exports = router;
