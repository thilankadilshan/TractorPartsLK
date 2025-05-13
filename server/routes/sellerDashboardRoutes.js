const express = require("express");
const router = express.Router();
const { protect, isSeller } = require("../middleware/authMiddleware");
const { getSellerDashboard } = require("../controllers/sellerDashboardController");

router.get("/dashboard", protect, isSeller, getSellerDashboard);

module.exports = router;
