// ==== ✅ server/controllers/sellerController.js ====

const Product = require('../models/Product');
const Order = require('../models/Order');
const SellerProfile = require('../models/SellerProfile');

const getSellerDashboard = async (req, res) => {
    try {
        const userId = req.user.id; // From auth middleware

        // Get seller profile
        const seller = await SellerProfile.findOne({ userId });
        if (!seller) {
            return res.status(404).json({ message: "Seller profile not found" });
        }

        // Sample stats
        const productCount = await Product.countDocuments({ sellerId: userId });
        const pendingOrders = await Order.countDocuments({ sellerId: userId, status: 'pending' });
        const totalSales = await Order.aggregate([
            { $match: { sellerId: userId, status: 'completed' } },
            { $group: { _id: null, total: { $sum: "$totalAmount" } } }
        ]);

        res.json({
            sellerName: seller.companyName,
            productCount,
            pendingOrders,
            totalSales: totalSales[0]?.total || 0
        });

    } catch (error) {
        console.error("Dashboard error:", error);
        res.status(500).json({ message: "Error loading seller dashboard" });
    }
};

module.exports = { getSellerDashboard };
