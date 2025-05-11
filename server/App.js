const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require("./routes/authRoutes");
dotenv.config(); // load .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // accept JSON

// Routes
const chatbotRoutes = require('./routes/chatbotRoutes');
app.use('/api/chatbot', chatbotRoutes);

app.use("/api/auth", authRoutes);


module.exports = app;




