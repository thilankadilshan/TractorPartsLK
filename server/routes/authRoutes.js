// ==== ✅ ROUTES: routes/authRoutes.js ====
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { register, login } = require("../controllers/authController");

// Register a normal user (default role = "user")
router.post("/register", express.json(), (req, res) => {
    req.body.role = "user";
    register(req, res);
});

// Register a seller (multipart/form-data with image)
router.post(
    "/register/seller",
    upload.single("profilePicture"),
    (req, res) => {
        req.body.role = "seller";
        req.body.logo = req.file ? req.file.path : null;
        req.body.address = req.body.companyAddress;
        req.body.contactNumber = req.body.contactNumber || "";
        register(req, res);
    }
);

// Login route
router.post("/login", express.json(), login);

module.exports = router;
