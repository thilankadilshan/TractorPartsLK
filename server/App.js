// App.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const sellerDashboardRoutes = require('./routes/sellerDashboardRoutes'); // ✅ Make sure this file exists and exports a router

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Mount routes
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/sellers', sellerRoutes); // Public-facing seller routes (listing/register)
app.use('/api/seller', sellerDashboardRoutes); // Seller dashboard (stats, management)

// Static file serving (logos, images)
app.use('/uploads', express.static('uploads'));

module.exports = app;
