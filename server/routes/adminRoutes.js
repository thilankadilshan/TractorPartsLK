// server/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { getAllUsers,
    verifySeller,
    deleteUser,
    updateUser } = require('../controllers/adminController');

// console.log("Loaded protect:", typeof protect); // should be function
// console.log("Loaded getAllUsers:", typeof getAllUsers); // should be function
// console.log("Loaded verifySeller:", typeof verifySeller); // should be function

router.delete('/user/:id', protect, deleteUser);
router.put('/user/:id', protect, updateUser);
// ✅ GET all users
router.get('/users', protect, getAllUsers);

// ✅ PUT verify seller
router.put('/verify-seller/:userId', protect, verifySeller);

module.exports = router;
