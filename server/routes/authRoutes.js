// ==== ✅ ROUTES: routes/authRoutes.js ====
// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { register, login } = require("../controllers/authController");

router.post("/register", express.json(), (req, res) => {
    req.body.role = "user";
    register(req, res);
});

router.post("/register/seller", upload.single("profilePicture"), (req, res) => {
    req.body.role = "seller";
    req.body.logo = req.file ? req.file.path : null;
    req.body.address = req.body.companyAddress;
    req.body.contactNumber = req.body.contactNumber || "";
    req.body.whatsappLink = req.body.whatsappLink || null;
    req.body.facebookLink = req.body.facebookLink || null;
    req.body.websiteLink = req.body.websiteLink || null;
    register(req, res);
});

router.post("/login", express.json(), login);

module.exports = router;
