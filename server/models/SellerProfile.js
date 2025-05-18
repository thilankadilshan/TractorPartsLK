// models/SellerProfile.js
const mongoose = require("mongoose");

const sellerProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    companyName: { type: String, required: true },
    logo: { type: String },
    contactNumber: { type: String },
    address: { type: String },
    website: { type: String },
    description: { type: String },
    isVerified: { type: Boolean, default: false }, // ✅ New field
}, { timestamps: true });

module.exports = mongoose.model("SellerProfile", sellerProfileSchema);
