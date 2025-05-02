const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // load .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // accept JSON

// Routes
const chatbotRoutes = require('./routes/chatbotRoutes');
app.use('/api/chatbot', chatbotRoutes);

module.exports = app;
