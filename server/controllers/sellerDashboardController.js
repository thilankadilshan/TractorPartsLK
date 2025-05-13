// controllers/sellerDashboardController.js
const SellerProfile = require("../models/SellerProfile");

const getSellerDashboard = async (req, res) => {
    try {
        const sellerId = req.user._id;
        const seller = await SellerProfile.findOne({ userId: sellerId });
        if (!seller) {
            return res.status(404).json({ message: "Seller profile not found" });
        }

        res.json({
            sellerName: seller.companyName,
        });
    } catch (err) {
        console.error("Dashboard error:", err);
        res.status(500).json({ message: "Server error in dashboard" });
    }
};

// ✅ GET profile controller
const getSellerProfile = async (req, res) => {
    try {
        const seller = await SellerProfile.findOne({ userId: req.user._id });

        if (!seller) {
            return res.status(404).json({ message: "Seller profile not found" });
        }

        res.json(seller);
    } catch (error) {
        console.error("Profile fetch error:", error);
        res.status(500).json({ message: "Server error while fetching profile" });
    }
};

// ✅ PUT profile update controller
const updateSellerProfile = async (req, res) => {
    try {
        const seller = await SellerProfile.findOne({ userId: req.user._id });

        if (!seller) {
            return res.status(404).json({ message: "Seller not found" });
        }

        seller.companyName = req.body.companyName || seller.companyName;
        seller.description = req.body.description || seller.description;

        // If you're using multer for logo update
        if (req.file) {
            seller.logo = req.file.path.replace(/\\/g, "/");
        }

        await seller.save();
        res.json(seller);
    } catch (err) {
        console.error("Update error:", err);
        res.status(500).json({ message: "Error updating profile" });
    }
};

module.exports = {
    getSellerDashboard,
    getSellerProfile,
    updateSellerProfile,
};
