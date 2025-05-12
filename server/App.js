const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require("./routes/authRoutes");
const chatbotRoutes = require('./routes/chatbotRoutes');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Accept JSON data

// Routes
app.use('/api/chatbot', chatbotRoutes);
app.use("/api/auth", authRoutes);

// Static files (uploads)
app.use("uploads/seller/profile", express.static("uploads"));

module.exports = app;
