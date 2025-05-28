const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// GET /api/users/me
// Returns the currently logged-in user's data (without password)
router.get("/me", protect, (req, res) => {
    if (!req.user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(req.user); // req.user is set by protect middleware, excludes password
});

module.exports = router;
