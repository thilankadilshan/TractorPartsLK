const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require("./routes/authRoutes");
const chatbotRoutes = require('./routes/chatbotRoutes');
const sellerRoutes = require('./routes/sellerRoutes');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Accept JSON data

// Routes
app.use('/api/chatbot', chatbotRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/sellers', sellerRoutes);

// Static files (uploads)
app.use('/uploads', express.static('uploads'));

module.exports = app;
