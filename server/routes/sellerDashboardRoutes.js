const express = require("express");
const router = express.Router();
const { protect, isSeller } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload"); // <-- Make sure this is imported
const {
    getSellerDashboard,
    getSellerProfile,
    updateSellerProfile
} = require("../controllers/sellerDashboardController");

// ✅ GET /api/seller/dashboard
router.get("/dashboard", protect, isSeller, getSellerDashboard);

// ✅ GET /api/seller/profile
router.get("/profile", protect, isSeller, getSellerProfile);

// ✅ FIXED PUT route (now using multer for file + form fields)
router.put("/profile", protect, isSeller, upload.single("logo"), updateSellerProfile);

module.exports = router;
