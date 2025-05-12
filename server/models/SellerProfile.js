const mongoose = require("mongoose");

const sellerProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    companyName: { type: String, required: true },
    logo: { type: String }, // file path or cloudinary URL
    contactNumber: { type: String },
    address: { type: String },
    website: { type: String },
    description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("SellerProfile", sellerProfileSchema);
