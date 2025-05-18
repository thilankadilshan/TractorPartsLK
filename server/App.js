// App.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const sellerDashboardRoutes = require('./routes/sellerDashboardRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes"); // ✅ correct path


dotenv.config();

const app = express(); // ✅ MUST come before using `app.use(...)`

app.use(cors());
app.use(express.json());

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/sellers', sellerRoutes); // Public-facing seller routes (listing/register)
app.use('/api/seller', sellerDashboardRoutes); // Seller dashboard (stats, management)
app.use('/api/seller', productRoutes); // ✅ Product routes for sellers
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.use("/api/admin", adminRoutes);




// Static file serving (logos, images)
app.use('/uploads', express.static('uploads'));

module.exports = app;
