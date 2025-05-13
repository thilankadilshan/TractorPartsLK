// routes/sellerDashboardRoutes.js
const express = require('express');
const router = express.Router();
const { getSellerDashboard } = require('../controllers/sellerDashboardController');

router.get('/dashboard', getSellerDashboard);

module.exports = router;
