// ==== ✅ MIDDLEWARE: middleware/upload.js ====

const multer = require("multer");
const path = require("path");

// --- Profile Picture Upload Storage ---
const profileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/seller/profile/"); // ✅ Do not change this path
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: profileStorage }); // 👈 This keeps your original upload for seller profile

// --- Product Image Upload Storage ---
const productStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/products"); // ✅ You can adjust this if needed
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const uploadProduct = multer({ storage: productStorage }); // 👈 Separate for product image uploads

// ✅ Export both: `upload` as default and `uploadProduct` as named
module.exports = upload;
module.exports.uploadProduct = uploadProduct;
