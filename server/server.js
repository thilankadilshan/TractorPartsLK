// ==== ✅ SERVER ENTRYPOINT: server.js ====
const mongoose = require("mongoose");
const app = require("./App");
require("dotenv").config();

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // ✅ No deprecated options
        console.log("MongoDB Connected:", mongoose.connection.host);
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Exit the process if the DB connection fails
    }
};

// Start the Server
const startServer = () => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

// Connect to MongoDB and then start the server
connectDB().then(startServer);
