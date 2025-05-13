// controllers/sellerDashboardController.js
const getSellerDashboard = async (req, res) => {
    try {
        // You can replace this with real data from your DB
        res.json({
            message: 'Welcome to the Seller Dashboard',
            stats: {
                products: 12,
                orders: 5,
                revenue: 1200,
            },
        });
    } catch (err) {
        console.error('Dashboard error:', err);
        res.status(500).json({ message: 'Server error in dashboard' });
    }
};

module.exports = { getSellerDashboard };
