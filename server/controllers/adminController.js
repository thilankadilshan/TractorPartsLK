// server/controllers/adminController.js

const User = require('../models/User');
const SellerProfile = require('../models/SellerProfile');
const Product = require('../models/Product'); // ✅ import your Product model

// ✅ Get all users with seller verification status merged
// server/controllers/adminController.js

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password').lean();

        // Fetch all seller profiles to map by userId
        const sellers = await SellerProfile.find({}, 'userId isVerified').lean();

        const sellersMap = new Map();
        sellers.forEach(seller => {
            sellersMap.set(seller.userId.toString(), seller);
        });

        // Merge isVerified into users
        const usersWithVerification = users.map(user => {
            if (user.role === 'seller') {
                const seller = sellersMap.get(user._id.toString());
                return {
                    ...user,
                    isVerified: seller ? seller.isVerified : false,
                };
            }
            return user;
        });

        console.log("Sending usersWithVerification:", usersWithVerification); // <--- Add this

        res.json(usersWithVerification);  // <-- make sure this is an array
    } catch (err) {
        console.error("Error in getAllUsers:", err.message);
        res.status(500).json({ message: 'Error fetching users' });
    }
};

// ✅ Verify seller controller remains same
const verifySeller = async (req, res) => {
    const { userId } = req.params;
    try {
        const seller = await SellerProfile.findOne({ userId });
        if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
        }
        seller.isVerified = true;
        await seller.save();
        res.json({ message: 'Seller verified successfully' });
    } catch (err) {
        console.error("Error in verifySeller:", err.message);
        res.status(500).json({ message: 'Server error verifying seller' });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        if (deletedUser.role === 'seller') {
            await SellerProfile.deleteOne({ userId: id });
            await Product.deleteMany({ seller: id }); // ✅ fixed field name
        }

        res.json({ message: "User and related data deleted successfully" });
    } catch (err) {
        console.error("Error deleting user:", err.message);
        res.status(500).json({ message: "Server error deleting user" });
    }
};

// Update user
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const nameParts = name.split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(" ");

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { firstName, lastName, email },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User updated successfully", user: updatedUser });
    } catch (err) {
        console.error("Error updating user:", err.message);
        res.status(500).json({ message: "Server error updating user" });
    }
};

module.exports = {
    getAllUsers,
    verifySeller,
    deleteUser,
    updateUser,
};
