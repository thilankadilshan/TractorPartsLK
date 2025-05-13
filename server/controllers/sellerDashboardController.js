// const Product = require("../models/Product");
// const Order = require("../models/Order");
const User = require("../models/User");

const getSellerDashboard = async (req, res) => {
    try {
        const sellerId = req.user._id;

        // Get seller full name
        const seller = await User.findById(sellerId);
        const sellerName = `${seller.firstName} ${seller.lastName}`;

        // Count seller's products
        // const productCount = await Product.countDocuments({ sellerId });

        // Count pending orders for this seller
        // const pendingOrders = await Order.countDocuments({ sellerId, status: "pending" });

        // // Calculate total sales (sum of paid orders)
        // const paidOrders = await Order.find({ sellerId, status: "paid" });
        // const totalSales = paidOrders.reduce((sum, order) => sum + order.totalPrice, 0);

        res.json({
            sellerName,
            // productCount,
            // pendingOrders,
            // totalSales,
        });
    } catch (err) {
        console.error("Dashboard error:", err);
        res.status(500).json({ message: "Server error in dashboard" });
    }
};

module.exports = { getSellerDashboard };
