// const express = require('express');
// const router = express.Router();
// const Seller = require('../models/SellerProfile');
// const upload = require('../middleware/upload');

// // @route   GET /api/sellers
// // @desc    Get all sellers (public-facing info)
// // @access  Public
// router.get('/', async (req, res) => {
//     try {
//         const sellers = await Seller.find().select('companyName logo description');
//         const cleanedSellers = sellers.map(seller => ({
//             ...seller._doc,
//             logo: seller.logo ? seller.logo.replace(/\\/g, '/') : null
//         }));
//         res.json(cleanedSellers);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error while fetching sellers' });
//     }
// });

// // @route   POST /api/sellers
// // @desc    Register new seller (uploads logo too)
// // @access  Public
// router.post('/', upload.single('logo'), async (req, res) => {
//     try {
//         const { companyName, description } = req.body;
//         const logoPath = req.file?.path ? req.file.path.replace(/\\/g, '/') : null;

//         const newSeller = new Seller({
//             companyName,
//             description,
//             logo: logoPath,
//         });

//         await newSeller.save();
//         res.status(201).json(newSeller);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error registering seller' });
//     }
// });

// module.exports = router;

// // @route   GET /api/sellers/:id
// // @desc    Get seller public profile by seller ID
// // @access  Public
// router.get('/:id', async (req, res) => {
//     try {
//         const seller = await Seller.findById(req.params.id).select('companyName logo description contactNumber address');

//         if (!seller) {
//             return res.status(404).json({ message: 'Seller not found' });
//         }

//         const cleanedSeller = {
//             ...seller._doc,
//             logo: seller.logo ? seller.logo.replace(/\\/g, '/') : null
//         };

//         res.json(cleanedSeller);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error while fetching seller info' });
//     }
// });


const express = require('express');
const router = express.Router();
const Seller = require('../models/SellerProfile');
const upload = require('../middleware/upload');

// ✅ Moved up: Get seller public profile by ID (avoid route conflict)
router.get('/:id', async (req, res) => {
    try {
        const seller = await Seller.findById(req.params.id).select('companyName logo description contactNumber address');

        if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
        }

        const cleanedSeller = {
            ...seller._doc,
            logo: seller.logo ? seller.logo.replace(/\\/g, '/') : null
        };

        res.json(cleanedSeller);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error while fetching seller info' });
    }
});

// ✅ Keep this below — no change
router.get('/', async (req, res) => {
    try {
        const sellers = await Seller.find().select('companyName logo description');
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

// ✅ Keep this below — no change
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
